<template>
  <select :class="select_class" :required="is_required">
    <option
      v-for="(option, index) in select_options"
      :key="index"
      :value="option.value"
    >
      {{ option.content }}
    </option>
  </select>
</template>
<script>
export default {
  name: "DefaultSelect",
  props: {
    select_class: String,
    is_required: Boolean,
    select_options: Array,
  },
};
</script>
