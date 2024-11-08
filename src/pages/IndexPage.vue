<template>
  <q-page
    class="row max-xs:h-dvh items-center justify-evenly bg-[#c2c2c2] text-white"
  >
    <ChatContainer />
  </q-page>
</template>

<script setup lang="ts">
import ChatContainer from '@components/ChatContainer.vue';

defineOptions({
  name: 'IndexPage',
});
</script>
