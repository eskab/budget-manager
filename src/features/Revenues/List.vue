<template>
  <div class="revenues">
    <Table :columns="columns" :data="list" v-if="list.length"></Table>
    <p v-else>
      {{ emptyList }}
    </p>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import resources from "@/resources";
  import columns from "./tableColumns";

  export default {
    created() {
      this.fetchRevenues();
    },
    data() {
      return {
        emptyList: resources.menu.revenues.emptyList,
        columns: [
          ...columns(
            id => this.deleteRevenue(id),
            params => this.$router.push(params),
          ),
        ],
      };
    },
    computed: {
      ...mapState({
        list: ({ revenues }) => revenues.revenues,
      }),
    },
    methods: {
      ...mapActions([
        "fetchRevenues",
        "deleteRevenue",
      ]),
    },
  };
</script>

<style lang="scss"></style>
