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
      <!-- transition-group을 적용하여 말풍선들이 부드럽게 등장하고 밀려나도록 설정 -->
      <transition-group name="chat" tag="div" class="mb-4 flex flex-col items-stretch gap-3">
        <ChatBubble v-for="(text, index) in displayedTexts" :key="index" :text="text.text" :align="text.align" />
      </transition-group>
      <ChatInputBox />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import ChatInputBox from '@components/ChatInputBox.vue';
import ChatBubble from '@components/ChatBubble.vue';

const texts = [
  { text: '꾸미고 싶은 텍스트를 입력해 보세요! 🌟 아래처럼 예쁘게 만들어 드릴게요. 😉', align: 'left' },
  { text: '얄미워 너 정말\n왜 저럴까 진짜?\n내가 알던 핑크빛 Romance는\n둥근 풍선 같던데\n우린 좌 우 앞 뒤 뾰족하다구!', align: 'right' },
  { text: '얄미워😤 너🫵 정말😠\n왜 저럴까🤔 진짜⁉️\n내가 알던 핑크빛🎀 Romance💖는\n둥근 풍선🎈 같던데💭\n우린 좌↔️ 우↔️ 앞⬆️ 뒤⬇️ 뾰족하다구!⚔️🌀', align: 'left' }
];

const displayedTexts = ref([]);

onMounted(() => {
  texts.forEach((text, index) => {
    setTimeout(() => {
      displayedTexts.value.push(text);
    }, index * 1000); 
  });
});
</script>

<style scoped>
.chat-enter-active {
  transition: all 0.5s ease;
}

.chat-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.chat-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.chat-move {
  transition: transform 0.5s ease-out;
}
</style>
