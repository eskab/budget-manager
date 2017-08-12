<template>
  <div class="header">
    <h2>{{ title }}</h2>
    <bm-menu></bm-menu>
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
