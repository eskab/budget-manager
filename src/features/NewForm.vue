<template>
  <div class="new">
    <expenditure-form
      :initialData="model"
      v-on:submit="submit"
    >
    </expenditure-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import homeResources from "@/resources";
  import expenditureForm from "@/components/ExpenditureForm";
  import formData from "@/mixins/formData";

  export default {
    components: {
      expenditureForm,
    },
    mixins: [formData],
    data() {
      return {
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
