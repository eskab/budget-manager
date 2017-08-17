<template>
  <div class="list">
    <filter-bar></filter-bar>
    <Table :columns="columns" :data="list" v-if="list.length"></Table>
    <p v-else>
      {{ emptyList }}
    </p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import resources from "@/resources";
  import FilterBar from "./FilterBar";
  import columns from "./tableColumns";

  export default {
    components: {
      FilterBar,
    },
    data() {
      return {
        emptyList: resources.menu.expenditures.emptyList,
        columns: [
          ...columns,
          {
            title: "Actions",
            key: "actions",
            width: 150,
            align: "center",
            render: (h, params) =>
              h("div", [
                h("Button", {
                  props: {
                    type: "error",
                    size: "small",
                  },
                  on: {
                    click: () => this.deleteExpenditure(params.row.id),
                  },
                }, "Delete"),
                h("Button", {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  on: {
                    click: () =>
                      this.$router.push({
                        name: "expenditureEdit",
                        params: {
                          id: params.row.id,
                        },
                      }),
                  },
                }, "Edit"),
              ]),
          },
        ],
      };
    },
    computed: {
      ...mapGetters({
        list: "filteredExpenditures",
      }),
    },
    created() {
      this.fetchExpenditures();
    },
    methods: {
      ...mapActions([
        "fetchExpenditures",
        "deleteExpenditure",
      ]),
    },
  };
</script>

<style lang="scss">
  .table {
    border-spacing: 0;
    width: 100%;

    td, th {
      padding: 12px 6px;
      font-size: 12px;
    }

    th {
      background-color: #f7f7f7;
      text-align: left;
      color: #333;
      font-weight: normal;
    }

    td {
      color: #555;
      border-bottom: 1px solid #e9e9e9;
    }
  }
</style>
