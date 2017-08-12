<template>
  <div class="edit">
    <expenditure-form
      :initialData="model"
      v-on:submit="submit"
    >
    </expenditure-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import expenditureForm from "@/components/ExpenditureForm";
  import ExpenditureService from "@/services/expenditures";
  import resources from "@/resources/home";

  export default {
    components: {
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
        title: resources.menu.edit,
      };
    },
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
