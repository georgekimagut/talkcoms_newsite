<template>
  <textarea
    :class="input_class"
    :placeholder="input_placeholder"
    :required="is_required"
  ></textarea>
</template>
<script>
export default {
  name: "DefaultTextArea",
  props: {
    input_class: String,
    input_placeholder: String,
    is_required: Boolean,
  },
};
</script>
