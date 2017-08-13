<template>
  <div class="header">
    <bm-menu :title="title"></bm-menu>
  </div>
</template>

<script>
  import Menu from "@/components/Menu";

  export default {
    name: "Header",
    props: ["title"],
    components: {
      "bm-menu": Menu,
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-flow: column wrap;
  }
</style>
