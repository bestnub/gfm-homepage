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
        <span :class="status == 'online' ? 'online' : 'offline'">
          {{ status == "online" ? "Online" : "Offline" }}
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
  </div>
</template>

<script>
import Card from "primevue/card";
import { copyText } from "vue3-clipboard";
export default {
  components: { Card },
  props: ["name", "description", "ip", "status", "imgUrl"],
  setup(props) {
    const doCopy = () => {
      copyText(props.ip, undefined, (error) => {
        if (error) {
          console.log(error);
        } else {
          alert("Copied");
        }
      });
    };

    return { doCopy };
  },
};
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