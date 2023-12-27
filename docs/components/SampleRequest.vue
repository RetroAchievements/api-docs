<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  httpVerb: {
    type: String,
    required: true,
    validator: (value) =>
      ["GET", "POST", "PUT", "PATCH", "DELETE"].includes(value),
  },
});

const verbClass = computed(() => {
  switch (props.httpVerb) {
    case "GET":
      return "bg-green-600";
    case "POST":
      return "bg-blue-600";
    case "PUT":
      return "bg-purple-600";
    case "PATCH":
      return "bg-yellow-600";
    case "DELETE":
      return "bg-red-600";
    default:
      return "bg-neutral-600";
  }
});
</script>

<template>
  <div
    class="-mx-6 overflow-y-auto px-5 py-2 sm:mx-0 sm:px-4 my-1 bg-neutral-100 sm:rounded-lg dark:bg-neutral-950"
  >
    <div class="flex gap-x-4 sm:gap-x-2 items-center text-sm">
      <div
        :class="`${verbClass} text-white text-xs font-bold rounded-full px-2 py-0.5`"
      >
        {{ props.httpVerb }}
      </div>

      <p class="font-semibold">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
