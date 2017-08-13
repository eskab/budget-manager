<template>
  <div class="list">
    <Table :columns="columns" :data="list" v-if="list.length"></Table>
    <p v-else>
      In order to see expenditures you have to add one
    </p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import homeResources from "@/resources/home";
  import columns from "./tableColumns";

  export default {
    data() {
      return {
        title: homeResources.menu.list,
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
                        name: "EditForm",
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
        list: "formattedList",
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
