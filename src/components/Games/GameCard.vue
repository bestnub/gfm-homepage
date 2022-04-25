<template>
  <div class="game-card" style="padding: 0.5em">
    <card class="flex flex-column" style="width: 100%; height: 100%">
      <template #header>
        <div class="flex justify-content-center">
          <img
            v-if="imgName || imgUrl"
            class="gameImg"
            :src="
              imgName ? require('@/assets/gamecard/' + imgName + '') : imgUrl
            "
          />
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
          {{ content }}
        </p>
      </template>
      <template #footer>
        <Button
          v-if="ip"
          icon="pi pi-copy"
          :label="'IP: ' + ip"
          class="p-button bottom-0"
          @click.prevent="doCopy"
        />
        <Button
          v-if="joinUrl"
          icon="pi pi-server"
          :label="'Join now'"
          class="p-button bottom-0"
          @click.prevent="doJoin"
        />
      </template>
    </card>
  </div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import { ref } from "@vue/reactivity";
import { copyText } from "vue3-clipboard";
import { useToast } from "primevue/usetoast";
import { ToastSeverity } from "primevue/api";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  components: { Card, Button },
  props: [
    "name",
    "description",
    "ip",
    "joinUrl",
    "friendlyName",
    "imgUrl",
    "imgName",
    "content",
  ],
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
        uptime.value = data;
      }
    };
    get();

    const doCopy = () => {
      copyText(props.ip, undefined, (error) => {
        if (error) {
          // eslint-disable-next-line
          console.log(error);
        } else {
          toast.add({
            severity: ToastSeverity.SUCCESS,
            summary: "IP Adresse wurde kopiert",
            detail: props.ip,
            life: 3000,
          });
        }
      });
    };

    const doJoin = () => {
      window.window.location.href = props.joinUrl;
    };

    return { doCopy, doJoin, uptime };
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
  max-height: 240px;
  width: auto;
  height: auto;
}
.online {
  color: green;
}
.offline {
  color: red;
}
.game-card:deep(.p-card-body) {
  flex-grow: 1;
  display: flex !important;
  flex-direction: column;
}
.game-card:deep(.p-card-content) {
  flex-grow: 1;
}
.game-card:deep(.p-card-footer) {
  padding: 0.5rem 0 0 0;
}
.game-card:deep(.p-button) {
  margin: 0.5rem 0.25rem 0;
}
.game-card:deep(.p-button:focus) {
  box-shadow: none !important;
}
</style>