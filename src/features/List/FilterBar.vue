<template>
  <div class="list-filter">
    <Form :model="model" inline>
      <!-- Extend it to component -->
      <Form-item label="Category">
        <Select v-model="model.categories" name="category" style="width: 300px" multiple>
          <Option v-for="category in categories" :value="category" :key="category">
            {{ category }}
          </Option>
        </Select>
      </Form-item>
      <Form-item label="Date range">
        <date-picker type="daterange" v-model="model.dateRange"></date-picker>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import categories from "@/mixins/categories";

  export default {
    mixins: [categories],
    computed: mapState({
      model: ({ expenditures }) => expenditures.filters,
    }),
  };
</script>

<style lang="scss">

</style>
