<template>
  <div
    class="flex h-[777px] max-h-[80%] w-[730px] flex-col overflow-hidden rounded-3xl bg-[#eee] max-xs:max-h-[90%] max-xs:w-11/12"
  >
    <div
      class="relative h-full w-full overflow-hidden"
      ref="containerRef"
      @mousemove="handleMouseMove"
    >
      <div ref="cursor" class="custom-cursor blur-3xl"></div>
      <div
        class="mx-4 my-2 flex h-[77px] items-center gap-3 p-6 max-xs:h-[50px] max-xs:p-3"
      >
        <q-icon
          name="fa-solid fa-wand-magic-sparkles"
          size="20px"
          style="color: #b7136b"
        />
        <p class="text-select-none text-xl font-bold text-[#1b0100]">
          Take That Text
        </p>
      </div>

      <div
        class="flex h-[calc(100%-77px-16px)] w-full flex-1 flex-col justify-start px-4 pb-4 max-xs:h-[calc(100%-50px-16px)]"
      >
        <div
          ref="chatContainer"
          class="h-[calc(100%-76px)] flex-1 overflow-y-auto max-xs:h-[calc(100%-66px)]"
        >
          <transition-group
            name="chat"
            tag="div"
            class="mb-4 flex flex-col items-stretch gap-3"
          >
            <ChatBubble
              v-for="(text, index) in displayedTexts"
              :key="index"
              :text="text.text"
              :align="text.align"
            />
          </transition-group>
        </div>
        <ChatInputBox
          v-model:isLoading="isLoading"
          :isInit="isInit"
          @sendMessage="handleSendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

import { ChatMessage, SendMessagePayload } from '@type/chat';
import { INITIAL_MESSAGES, CURSOR_CONFIG } from '@constants/chat';
import ChatInputBox from '@components/ChatInputBox.vue';
import ChatBubble from '@components/ChatBubble.vue';
import { sendMessageToOpenAI } from '@utils/openai';

const isInit = ref(false);
const isLoading = ref(false);
const cursor = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const chatContainer = ref<HTMLElement | null>(null);
const displayedTexts = ref<ChatMessage[]>([]);

const handleMouseMove = (event: MouseEvent) => {
  if (cursor.value && containerRef.value) {
    const containerRect = containerRef.value.getBoundingClientRect();
    const x = event.clientX - containerRect.left - CURSOR_CONFIG.size / 2;
    const y = event.clientY - containerRect.top - CURSOR_CONFIG.size / 2;

    cursor.value.style.left = `${x}px`;
    cursor.value.style.top = `${y}px`;

    cursor.value.style.backgroundColor = CURSOR_CONFIG.color;
    cursor.value.style.opacity = CURSOR_CONFIG.opacity.toString();
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};

const handleSendMessage = async ({ text }: SendMessagePayload) => {
  displayedTexts.value.push({ text, align: 'right' });
  scrollToBottom();

  try {
    const response = await sendMessageToOpenAI(text);
    displayedTexts.value.push({ text: response!, align: 'left' });
    scrollToBottom();
  } catch (error) {
    console.error('메시지 전송 실패:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  INITIAL_MESSAGES.forEach((text, index) => {
    setTimeout(() => {
      displayedTexts.value.push(text);
      scrollToBottom();

      if (index === INITIAL_MESSAGES.length - 1) isInit.value = true;
    }, index * 1000);
  });
});
</script>

<style scoped>
.custom-cursor {
  position: absolute;
  width: v-bind('CURSOR_CONFIG.size + "px"');
  height: v-bind('CURSOR_CONFIG.size + "px"');
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.1s ease;
}

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
