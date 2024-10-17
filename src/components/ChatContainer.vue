<template>
  <div
    class="flex h-[777px] max-h-[80%] w-[730px] max-w-[80%] flex-col rounded-3xl bg-[#eee] p-2"
  >
    <div class="flex items-center gap-3 p-6">
      <q-icon
        name="fa-solid fa-wand-magic-sparkles"
        size="20px"
        style="color: #9d14b7"
      />
      <p class="text- select-none text-xl font-bold text-[#1b000f]">
        Take That Text
      </p>
    </div>

    <div class="flex w-full flex-1 flex-col justify-end">
      <div></div>
      <ChatInputBox />
    </div>
  </div>
</template>

<script setup>
import ChatInputBox from '@components/ChatInputBox.vue';
</script>
