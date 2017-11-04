<template>
  <div class="edit-expenditure-form">
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
  import ExpenditureService from "@/services/expenditures";
  import formData from "@/mixins/formData";

  export default {
    components: {
      ExpenditureForm,
    },
    mixins: [formData],
    created() {
      ExpenditureService.getById(this.$route.params.id)
        .then((data) => { this.model = data; });
    },
    methods: {
      submit(payload) {
        this.update(payload);
      },
      ...mapActions({
        update: "updateExpenditure",
      }),
    },
  };
</script>

<style lang="scss">

</style>
