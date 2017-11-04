<template>
  <div class="new-revenue-form">
    <revenue-form
      :model="model"
      v-on:submit="submit"
    >
    </revenue-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import RevenueForm from "@/features/Revenues/RevenueForm";
  import formData from "@/mixins/formData";

  export default {
    components: {
      RevenueForm,
    },
    mixins: [formData],
    methods: {
      submit(payload) {
        this.insert(payload);
        this.resetForm();
      },
      ...mapActions({
        insert: "insertRevenue",
      }),
    },
  };
</script>

<style lang="scss"></style>
