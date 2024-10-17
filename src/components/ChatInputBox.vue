<template>
  <div class="flex min-h-[60px] overflow-hidden rounded-2xl shadow-sm">
    <div class="flex h-full w-11/12 items-center bg-white p-5">
      <textarea
        placeholder="텍스트를 입력해 주세요!"
        class="max-h-[150px] w-full resize-none text-[#333] outline-none"
        rows="{1}"
        ref="textarea"
        @input="handleAutoResize"
        @change="handleChangeInput"
      ></textarea>
    </div>
    <div
      class="flex w-1/12 cursor-pointer items-center justify-center bg-[#f7f7f7]"
    >
      <q-icon name="fa-solid fa-reply" size="20px" style="color: #ccc" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const textarea = ref(null);
let contents = ref('');

const handleChangeInput = (e) => {
  return (contents.value = e.target.value);
};

const handleAutoResize = () => {
  textarea.value.style.height = '1.5rem';
  textarea.value.style.height = textarea.value.scrollHeight + 'px';
};

onMounted(() => {
  textarea.value.style.height = '1.5rem';
});
</script>
