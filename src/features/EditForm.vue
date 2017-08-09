<template>
  <div class="edit">
    <heading :title="title"></heading>
    <expenditure-form
      :initialData="model"
      :categoryOptions="categoryOptions"
      v-on:submit="submit"
    >
    </expenditure-form>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import heading from "@/components/Header";
  import expenditureForm from "@/components/ExpenditureForm";

  export default {
    components: {
      heading,
      expenditureForm,
    },
    data() {
      return {
        title: "Edit expenditure",
        // todo: move it to dictionaries
        categoryOptions: [
          "Food", "Bills",
        ],
      };
    },
    computed: mapState({
      // eslint-disable-next-line no-shadow
      model: ({ expenditureForm }) => ({
        id: expenditureForm.id,
        name: expenditureForm.name,
        date: expenditureForm.date,
        category: expenditureForm.category,
        cost: expenditureForm.cost,
      }),
    }),
    created() {
      this.fetch(this.$route.params.id);
    },
    beforeDestroy() {
      this.erase();
    },
    methods: {
      submit(payload) {
        console.log(payload);
        this.update(payload);
      },
      ...mapActions({
        update: "updateExpenditure",
        erase: "eraseData",
        fetch: "getFormDataById",
      }),
    },
  };
</script>

<style lang="scss">

</style>
