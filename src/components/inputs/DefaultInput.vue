<template>
  <input
    :type="input_type"
    :placeholder="input_placeholder"
    :class="input_class"
    :required="is_required"
  />
</template>
<script>
export default {
  name: "DefaultInput",
  props: {
    input_type: String,
    input_class: String,
    input_placeholder: String,
    is_required: Boolean,
  },
};
</script>
