<template>
  <Menu mode="horizontal" theme="dark" :active-name="routeName">
    <div class="title">
      {{ title }}
    </div>
    <div class="nav">
      <Menu-item name="List">
        <router-link to="/list">
          <Icon type="navicon-round"></Icon>
          {{ menu.list }}
        </router-link>
      </Menu-item>
      <Menu-item name="NewForm">
        <router-link to="/new">
          <Icon type="plus-round"></Icon>
          {{ menu.new }}
        </router-link>
      </Menu-item>
      <Menu-item name="Configuration">
        <router-link to="/configuration">
          <Icon type="gear-a"></Icon>
          {{ menu.configuration }}
        </router-link>
      </Menu-item>
    </div>
  </Menu>
</template>

<script>
  import homeResources from "@/resources/home";

  export default {
    props: ["title"],
    data() {
      return {
        menu: homeResources.menu,
      };
    },
    computed: {
      routeName() {
        return this.$route.name;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .ivu-menu {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .ivu-menu-item {
    padding: 0;

    &-active {
      a.router-link-active {
        color: #fff;
      }
    }

    i {
      margin-right: 5px;
    }

    a {
      display: block;
      padding: 0 20px;
      color: hsla(0,0%,100%,.7);

      &:hover {
        color: #fff;
      }
    }
  }

  .title {
    color: #fff;
  }
</style>
