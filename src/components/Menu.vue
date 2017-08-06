<template>
  <div class="menu">
    <router-link to="/">{{ menu.home }}</router-link>
    <router-link to="/list">{{ menu.list }}</router-link>
    <router-link to="/new">{{ menu.new }}</router-link>
  </div>
</template>

<script>
  import homeResources from "@/resources/home";

  export default {
    name: "Menu",
    data() {
      return {
        menu: homeResources.menu,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    flex-flow: row wrap;

    a {
      margin-right: 10px;
    }
  }
</style>
