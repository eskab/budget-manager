<template>
  <div class="new">
    <heading :title="title"></heading>
    <expenditure-form
      :initialData="model"
      v-on:submit="submit"
    >
    </expenditure-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import datePicker from "vuejs-datepicker";
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";
  import expenditureForm from "@/components/ExpenditureForm";

  export default {
    components: {
      heading: Heading,
      datePicker,
      expenditureForm,
    },
    data() {
      return {
        model: {
          id: null,
          name: null,
          date: null,
          category: null,
          cost: null,
        },
        title: homeResources.menu.new,
      };
    },
    methods: {
      submit(payload) {
        this.insert(payload);
      },
      ...mapActions({
        insert: "insertExpenditure",
      }),
    },
  };
</script>

<style lang="scss">

</style>
