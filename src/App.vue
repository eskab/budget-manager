<template>
  <div id="app">
    <notification></notification>
    <router-view></router-view>
  </div>
</template>

<script>
  import notification from "@/components/Notification";

  export default {
    name: "app",
    components: {
      notification,
    },
  };
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 10px;
}
</style>
