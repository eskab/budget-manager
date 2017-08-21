<template>
  <div class="new-expenditure-form">
    <expenditure-form
      :initialData="model"
      v-on:submit="submit"
    >
    </expenditure-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import ExpenditureForm from "@/components/ExpenditureForm";
  import formData from "@/mixins/formData";

  export default {
    components: {
      ExpenditureForm,
    },
    mixins: [formData],
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

<style lang="scss"></style>
