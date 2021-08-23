<template>
  <div class="flex flex-wrap justify-center mt-20">
    <SCard>
      <template #header>
        <div>Jogos</div>
      </template>
      <template #body>
        <div>Corpo</div>
      </template>
    </SCard>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
export default {
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
