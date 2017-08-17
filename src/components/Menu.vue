<template>
  <Menu mode="horizontal" theme="dark" :active-name="routeName">
    <div class="title">{{ title }}</div>
    <div class="nav">
      <Submenu name="revenues">
        <template slot="title">
          <Icon type="card"></Icon>
          {{ menu.revenues.name }}
        </template>
        <Menu-item name="revenuesList">
          <router-link to="/revenues" tag="span">
            <Icon type="navicon-round"></Icon>
            {{ menu.revenues.list }}
          </router-link>
        </Menu-item>
        <Menu-item name="revenuesNew">
          <router-link to="/revenues/new" tag="span">
            <Icon type="plus-round"></Icon>
            {{ menu.revenues.new }}
          </router-link>
        </Menu-item>
      </Submenu>
      <Submenu name="expenditures">
        <template slot="title">
          <Icon type="bag"></Icon>
          {{ menu.expenditures.name }}
        </template>
        <Menu-item name="expendituresList">
          <router-link to="/expenditures" tag="span">
            <Icon type="navicon-round"></Icon>
            {{ menu.expenditures.list }}
          </router-link>
        </Menu-item>
        <Menu-item name="expenditureNew">
          <router-link to="/expenditure/new" tag="span">
            <Icon type="plus-round"></Icon>
            {{ menu.expenditures.new }}
          </router-link>
        </Menu-item>
      </Submenu>
      <Menu-item name="configuration">
        <router-link to="/configuration" tag="span">
          <Icon type="gear-a"></Icon>
          {{ menu.configuration.name }}
        </router-link>
      </Menu-item>
    </div>
  </Menu>
</template>

<script>
  import homeResources from "@/resources";

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

  .ivu-icon {
    margin: 0 5px;
  }

  .ivu-menu-item {
    padding: 0;

    &-active {
      a.router-link-active {
        color: #fff;
      }
    }
  }

  .title {
    color: #fff;
  }
</style>
