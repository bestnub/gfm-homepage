<template>
  <div style="padding: 0.5em">
    <card style="width: 100%">
      <template #header>
        <div style="display: flex; justify-content: center">
          <img class="gameImg" :src="imgUrl" style="" />
        </div>
      </template>
      <template #title> {{ name }} </template>
      <template #subtitle>
        <span :class="uptime.online ? 'online' : 'offline'">
          {{ uptime.online ? "Online" : "Offline" }}
        </span>
      </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <Button
          v-if="ip"
          icon="pi pi-copy"
          :label="'IP: ' + ip"
          class="p-button copy-ip"
          @click.prevent="doCopy"
        />
      </template>
    </card>
    <Toast position="top-center" />
  </div>
</template>

<script>
import Card from "primevue/card";
import { copyText } from "vue3-clipboard";
import { ref } from "@vue/reactivity";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { defineComponent } from "@vue/runtime-core";
import Button from "primevue/button";
export default defineComponent({
  components: { Card, Toast, Button },
  props: ["name", "description", "ip", "friendlyName", "imgUrl"],
  setup(props) {
    const toast = useToast();
    const uptime = ref({
      friendlyName: "",
      online: false,
    });
    const get = async function () {
      let response = await fetch(
        "https://api.gamingformiau.de/api/uptime/" + props.friendlyName
      );
      if (response.status.toString().startsWith("2")) {
        let data = await response.json();
        console.log(data);
        uptime.value = data;
      }
    };
    get();

    const doCopy = () => {
      copyText(props.ip, undefined, (error) => {
        if (error) {
          console.log(error);
        } else {
          toast.add({
            severity: "success",
            summary: "IP Adresse wurde kopiert",
            detail: props.ip,
            life: 3000,
          });
        }
      });
    };

    return { doCopy, uptime };
  },
});
</script>

<style lang="scss" scoped>
p {
  line-height: 1.5;
  margin: 0;
}
.gameImg {
  padding: 1rem 1rem 0;
  display: block;
  max-width: 100%;
  max-height: 15rem;
  width: auto;
  height: auto;
}
.online {
  color: green;
}
.offline {
  color: red;
}
</style>