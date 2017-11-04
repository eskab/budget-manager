<template>
  <div class="new-expenditure-form">
    <expenditure-form
      :model="model"
      v-on:submit="submit"
    >
    </expenditure-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import ExpenditureForm from "@/features/Expenditures/ExpenditureForm";
  import formData from "@/mixins/formData";

  export default {
    components: {
      ExpenditureForm,
    },
    mixins: [formData],
    methods: {
      submit(payload) {
        this.insert(payload);
        this.resetForm();
      },
      ...mapActions({
        insert: "insertExpenditure",
      }),
    },
  };
</script>

<style lang="scss"></style>
