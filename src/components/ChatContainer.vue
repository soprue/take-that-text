<template>
  <div
    class="flex h-[777px] max-h-[80%] w-[730px] max-w-[80%] flex-col rounded-3xl bg-[#eee] p-4"
  >
    <div class="flex items-center gap-3 p-6">
      <q-icon
        name="fa-solid fa-wand-magic-sparkles"
        size="20px"
        style="color: #b7136b"
      />
      <p class="text- select-none text-xl font-bold text-[#1b0100]">
        Take That Text
      </p>
    </div>

    <div class="flex w-full flex-1 flex-col justify-end">
      <div class="mb-4 flex flex-col items-stretch gap-3">
        <ChatBubble v-for="(text, index) in texts" :key="index" :text="text.text" :align="text.align" />

      </div>
      <ChatInputBox />
    </div>
  </div>
</template>

<script setup>
import ChatInputBox from '@components/ChatInputBox.vue';
import ChatBubble from '@components/ChatBubble.vue';

const texts = [
  { text: '꾸미고 싶은 텍스트를 입력해 보세요! 🌟 예쁘게 만들어 드릴게요. 😉', align: 'left' },
  { text: '얄미워 너 정말\n왜 저럴까 진짜?\n내가 알던 핑크빛 Romance는\n둥근 풍선 같던데\n우린 좌 우 앞 뒤 뾰족하다구!', align: 'right' },
  { text: '얄미워😤 너🫵 정말😠\n왜 저럴까🤔 진짜⁉️\n내가 알던 핑크빛🎀 Romance💖는\n둥근 풍선🎈 같던데💭\n우린 좌↔️ 우↔️ 앞⬆️ 뒤⬇️ 뾰족하다구!⚔️🌀', align: 'left' }
];
</script>
