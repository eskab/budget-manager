<template>
  <transition
    name="fade"
    v-on:enter="enter"
  >
    <div class="notification" v-if="notification" v-bind:class="classObject">
      {{ notification.message }}
    </div>
  </transition>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    data: () => ({
      timer: null,
    }),
    computed: mapState({
      notification: ({ userinterface }) => userinterface.currentNotification,
      classObject() {
        return {
          error: this.notification.type === "error",
          success: this.notification.type === "success",
          warning: this.notification.type === "warning",
        };
      },
    }),
    methods: {
      // todo: first implementation - think about it
      enter(el, done) {
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          this.clearCurrentNotification();
          done();
        }, 1000);
      },
      ...mapActions([
        "clearCurrentNotification",
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  .notification {
    display: block;
    position: absolute;
    top: 30px;
    right: 20px;
    color: white;
    padding: 7px 14px;
    font-size: 12px;
    border-radius: 6px;

    &.error {
      background-color: #e74c3c;
    }

    &.warning {
      background-color: #e67e22;
    }

    &.success {
      background-color: #2ecc71;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter {
    transform: translateY(-20px);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-to {
    transform: translateY(20px);
  }
</style>
