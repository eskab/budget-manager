<template>
  <div class="configuration">
    <heading :title="title"></heading>
    <p>Here will be possibility to edit dictionaries</p>
  </div>
</template>

<script>
  import resources from "@/resources/home";
  import Heading from "@/components/Header";

  export default {
    components: {
      heading: Heading,
    },
    data() {
      return {
        title: resources.menu.configuration,
      };
    },
  };
</script>

<style lang="scss">

</style>
