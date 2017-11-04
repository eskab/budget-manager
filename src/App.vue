<template>
  <div id="app" class="app">
    <notification></notification>
    <heading :title="title"></heading>
    <div class="app-container">
      <transition name="view-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import notification from "@/components/Notification";
  import heading from "@/components/Header";
  import resources from "@/resources";

  export default {
    name: "app",
    components: {
      notification,
      heading,
    },
    data() {
      return {
        title: resources.title,
      };
    },
  };
</script>

<style lang="scss">
.view-fade-enter-active, .view-fade-leave-active {
  transition: all .1s ease;
}

.view-fade-enter,
.view-fade-leave-to {
  opacity: 0;
}

.app-container {
  margin: 15px 10px;
}

</style>
