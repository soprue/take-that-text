<template>
  <div
    class="z-10 flex min-h-[60px] overflow-hidden rounded-2xl shadow-sm max-xs:min-h-[50px]"
  >
    <div class="flex h-full w-11/12 items-center bg-white p-5 max-xs:w-5/6">
      <textarea
        :value="contents"
        placeholder="텍스트를 입력해 주세요."
        class="max-h-[150px] w-full resize-none text-[#1b0100] outline-none max-xs:max-h-[100px]"
        rows="1"
        ref="textarea"
        @input="handleInput"
      ></textarea>
    </div>
    <button
      class="flex w-1/12 items-center justify-center bg-[#f7f7f7] max-xs:w-1/6"
      :class="{
        '!cursor-default': isEmptyContents,
        'cursor-pointer': !isEmptyContents,
        '!opacity-100': true,
      }"
      :disabled="!props.isInit || props.isLoading || isEmptyContents"
      @click="handleSend"
    >
      <q-spinner
        v-if="!props.isInit || props.isLoading"
        color="grey"
        size="1.5em"
      />
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

const props = defineProps({ isInit: Boolean, isLoading: Boolean });
const emit = defineEmits(['sendMessage', 'update:isLoading']);

const textarea = ref(null);
const contents = ref('');

const isEmptyContents = computed(() => contents.value.trim() === '');

const handleInput = (e) => {
  contents.value = e.target.value;
  handleAutoResize();
};

const handleAutoResize = () => {
  textarea.value.style.height = '1.5rem';
  textarea.value.style.height = `${textarea.value.scrollHeight}px`;
};

const handleSend = async () => {
  if (props.isLoading.value) return;
  emit('update:isLoading', true);

  emit('sendMessage', { text: contents.value.trim(), response: '1' });

  contents.value = '';
  textarea.value.style.height = '1.5rem';
};

onMounted(() => handleAutoResize());
</script>
