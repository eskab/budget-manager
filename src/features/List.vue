<template>
  <div class="list">
    <heading :title="title"></heading>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Category</th>
          <th>Cost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list">
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.cost }}</td>
          <td>
            <button
              class="button-link"
              v-on:click="deleteExpenditure(item.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";

  export default {
    components: {
      heading: Heading,
    },
    data() {
      return {
        title: homeResources.menu.list,
      };
    },
    computed: mapState({
      list: ({ expenditures }) => expenditures.expenditures,
    }),
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
    margin: 20px 0;

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
