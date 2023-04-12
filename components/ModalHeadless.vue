<template>
  <!-- Wrap your dialog in a `TransitionRoot`. -->
  <TransitionRoot :show="isOpen" as="template">
    <Dialog @close="setIsOpen">
      <!-- Wrap your backdrop in a `TransitionChild`. -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

      <!-- Wrap your panel in a `TransitionChild`. -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <DialogPanel>
          <DialogTitle>Deactivate account</DialogTitle>
          gdfgdfgdfgdfgdfgdfg
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'

  const isOpen = ref(true)

  function setIsOpen(value) {
    isOpen.value = value
  }
</script>
