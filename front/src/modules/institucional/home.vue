<template>
  <Carousel></Carousel>

  <div class="flex flex-wrap justify-center mt-20">
    <SCard>
      <template #header>
        <div>Jogos</div>
      </template>
      <template #body>
        <div>Corpo</div>
      </template>
    </SCard>
    <Infopainel></Infopainel>
  </div>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Infopainel from "./components/Infopainel.vue";

import { inject, onBeforeMount } from "vue";
export default {
  components: {
    Carousel,
    Infopainel,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useInstitucional = inject("institucional");
    const { bgImagem, mobile, linkWhatsApp, isMobile } = useInstitucional;
    onBeforeMount(() => {
      isMobile();
      document.body.style.height = window.innerHeight;
      console.log(window.innerHeight);
    });

    return { bgImagem, mobile, linkWhatsApp, isMobile };
  },
};
</script>
