<template>
  <transition
    v-on:enter="enter"
    v-if="notification"
  >
    <div></div>
  </transition>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    computed: mapState({
      notification: ({ userInterface }) => userInterface.currentNotification,
    }),
    methods: {
      enter() {
        this.$Notice[this.notification.type]({
          title: this.notification.message,
          duration: 3,
          onClose: () => {
            this.clearCurrentNotification();
          }
        });
      },
      ...mapActions([
        "clearCurrentNotification",
      ]),
    },
  };
</script>
