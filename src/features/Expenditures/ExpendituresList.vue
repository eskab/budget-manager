<template>
  <div class="expenditures">
    <filter-bar></filter-bar>
    <div class="expenditures-table" v-if="paged.length">
      <Table :columns="columns" :data="currentPageData"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="totalCount" :current="currentPage" @on-change="changePage"></Page>
        </div>
      </div>
    </div>
    <p v-else>
      {{ emptyList }}
    </p>
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
  import resources from "@/resources";
  import { SET_CURRENT_PAGE } from "@/store/mutations";
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
          ...columns(
            id => this.deleteExpenditure(id),
            params => this.$router.push(params),
          ),
        ],
      };
    },
    computed: {
      ...mapGetters({
        paged: "pagedExpenditures",
        totalCount: "totalCount",
      }),
      ...mapState({
        currentPage: ({ expenditures }) => expenditures.currentPage,
      }),
      currentPageData() {
        return this.paged[this.currentPage - 1];
      },
    },
    created() {
      this.fetchExpenditures();
    },
    methods: {
      ...mapMutations({
        setPage: SET_CURRENT_PAGE,
      }),
      ...mapActions([
        "fetchExpenditures",
        "deleteExpenditure",
      ]),
      changePage(page) {
        this.setPage(page);
      },
    },
  };
</script>

<style lang="scss"></style>
