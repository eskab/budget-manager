<template>
  <div class="home">
    <heading :title="title"></heading>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";

  export default {
    name: "home",
    components: {
      heading: Heading,
    },
    data() {
      return {
        title: homeResources.title,
        menu: homeResources.menu,
        message: homeResources.message,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
