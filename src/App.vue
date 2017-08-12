<template>
  <div id="app">
    <notification></notification>
    <heading title="Budget manager"></heading>
    <transition name="view-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import notification from "@/components/Notification";
  import heading from "@/components/Header";

  export default {
    name: "app",
    components: {
      notification,
      heading,
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

.view-fade-enter-active, .view-fade-leave-active {
  transition: all .1s ease;
}

.view-fade-enter,
.view-fade-leave-to {
  opacity: 0;
}

</style>
