<template>
  <div class="list-filter">
    <Form inline>
      <!-- Extend it to component -->
      <Form-item label="Category">
        <Select v-model="categories" name="category" style="width: 200px" multiple>
          <Option v-for="category in categoriesDictionary" :value="category" :key="category">
            {{ category }}
          </Option>
        </Select>
      </Form-item>
      <Form-item label="Date range">
        <date-picker type="daterange" v-model="dateRange"></date-picker>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import categories from "@/mixins/categories";
  import { UPDATE_CATEGORY_FILTER, UPDATE_DATERANGE_FILTER } from "@/store/mutations";

  export default {
    mixins: [categories],
    computed: {
      categories: {
        get() {
          return this.$store.state.expenditures.filters.categories;
        },
        set(value) {
          this.$store.commit(UPDATE_CATEGORY_FILTER, value);
        },
      },
      dateRange: {
        get() {
          return this.$store.state.expenditures.filters.dateRange;
        },
        set(value) {
          this.$store.commit(UPDATE_DATERANGE_FILTER, value);
        },
      },
    },
  };
</script>

<style lang="scss">

</style>
