<template>
  <div
    class="h-[777px] max-h-[80%] w-[730px] max-w-[80%] rounded-3xl bg-[#eee] p-2"
  >
    <div class="flex items-center gap-2 p-6">
      <IconBase
        width="30"
        height="30"
        icon-color="#9d14b7"
        viewBox="0 -960 960 960"
      >
        <IconPersonPlay />
      </IconBase>

      <p class="text- select-none text-xl font-bold text-[#1b000f]">
        Take That Text
      </p>
    </div>

    <div></div>
  </div>
</template>

<script setup>
import IconPersonPlay from '@components/icons/IconPersonPlay.vue';
</script>
