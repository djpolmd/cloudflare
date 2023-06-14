<template>
  <div class="field">
    <label class="block text-900 font-medium mb-2" :for="name">{{ label }}</label>
    <InputText
        v-model="value"
        :aria-describedby="`${name}-help`"
        class="w-full mb-3"
        :class="{ 'p-invalid': errorMessage }"
        :type="type"
    />
    <small :id="`${name}-help`" class="p-error">{{ errorMessage }}</small>
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';
import InputText from 'primevue/inputtext';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
});

const { errorMessage, value } = useField(toRef(props, 'name'));
</script>

<style lang="postcss" scoped>
.field * {
  display: block;
}
</style>
