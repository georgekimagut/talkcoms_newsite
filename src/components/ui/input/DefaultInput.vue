<template>
  <Input
    :type="input_type"
    :placeholder="input_placeholder"
    class="border-1 border-[#e3e3e3] p-2 w-full mt-[5px]"
  />
</template>
<script>
export default {
  name: "DefaultInput",
  props: {
    input_type: String,
    input_placeholder: String,
    is_required: Boolean,
  },
};
</script>
