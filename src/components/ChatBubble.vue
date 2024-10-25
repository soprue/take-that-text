<template>
  <div
    class="bubble w-fit max-w-[450px] whitespace-pre-line rounded-xl bg-white px-5 py-4 text-[#1b0100] shadow-sm"
    :class="align === 'left' ? 'self-start' : 'self-end'"
  >
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String,
  align: String,
});
</script>

<style scoped>
@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.bubble {
  animation: slideUp 0.7s ease-out;
}
</style>
