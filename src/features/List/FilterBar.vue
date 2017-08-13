<template>
  <div class="list-filter">
    <Form :model="model" inline>
      <!-- Extend it to component -->
      <Form-item label="Category">
        <Select v-model="model.category" name="category">
          <Option v-for="category in categories" :value="category" :key="category">
            {{ category }}
          </Option>
        </Select>
      </Form-item>
      <Form-item label="Date range">
        <date-picker type="daterange" v-model="model.dateRange"></date-picker>
      </Form-item>
      <Form-item>
        <Button type="primary" v-on:click.prevent="filter(model)">Submit</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import DictionariesService from "@/services/dictionaries";

  export default {
    data() {
      return {
        model: {
          category: null,
          dateRange: null,
        },
        categories: null,
      };
    },
    created() {
      // Todo - create mixin for that
      DictionariesService.fetch()
        .then(data => data.map(({ code }) => code))
        .then((data) => { this.categories = data; });
    },
    methods: {
      ...mapActions({
        filter: "filterExpenditures",
      }),
    },
  };
</script>

<style lang="scss">

</style>
