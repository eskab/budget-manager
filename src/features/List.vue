<template>
  <div class="list">
    <heading :title="title"></heading>
  </div>
</template>

<script>
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";

  export default {
    components: {
      heading: Heading,
    },
    data() {
      return {
        title: homeResources.menu.list,
      };
    },
  };
</script>

<style lang="scss">

</style>
