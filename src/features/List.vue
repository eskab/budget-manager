<template>
  <div class="list">
    <heading :title="title"></heading>
    <p>You are on list of expenditures</p>
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";

  export default {
    components: {
      heading: Heading,
    },
    computed: mapState({
      list: state => state.expenditures,
    }),
    data() {
      return {
        title: homeResources.menu.list,
      };
    },
  };
</script>

<style lang="scss">

</style>
