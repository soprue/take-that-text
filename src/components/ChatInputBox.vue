<template>
  <div class="z-10 flex min-h-[60px] overflow-hidden rounded-2xl shadow-sm">
    <div class="flex h-full w-11/12 items-center bg-white p-5">
      <textarea
        :value="contents"
        placeholder="텍스트를 입력해 주세요."
        class="max-h-[150px] w-full resize-none text-[#1b0100] outline-none"
        rows="1"
        ref="textarea"
        @input="handleInput"
      ></textarea>
    </div>
    <button
      class="flex w-1/12 items-center justify-center bg-[#f7f7f7]"
      :class="{
        '!cursor-default': isEmptyContents,
        'cursor-pointer': !isEmptyContents,
        '!opacity-100': true,
      }"
      :disabled="isEmptyContents || isLoading"
      @click="handleSend"
    >
      <q-spinner v-if="isLoading" color="grey" size="1.5em" />
      <q-icon
        v-else
        name="fa-solid fa-reply"
        size="20px"
        :style="{
          color: isEmptyContents ? '#ccc' : '#555',
          cursor: isEmptyContents ? 'default !important' : 'pointer',
        }"
      />
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { sendMessageToOpenAI } from '@utils/openai';

const emit = defineEmits(['sendMessage']);

const textarea = ref(null);
const contents = ref('');
const isLoading = ref(false);

const isEmptyContents = computed(() => {
  return contents.value.trim().length === 0;
});

const handleInput = (e) => {
  contents.value = e.target.value;
  handleAutoResize();
};

const handleAutoResize = () => {
  textarea.value.style.height = '1.5rem';
  textarea.value.style.height = textarea.value.scrollHeight + 'px';
};

const handleSend = async () => {
  if (isLoading.value) return;

  isLoading.value = true;
  const messageContent = contents.value.trim();
  contents.value = '';

  try {
    const response = await sendMessageToOpenAI(messageContent);
    emit('sendMessage', { text: messageContent, response: response });
  } catch (error) {
    console.error('메시지 전송 실패:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  textarea.value.style.height = '1.5rem';
});
</script>
