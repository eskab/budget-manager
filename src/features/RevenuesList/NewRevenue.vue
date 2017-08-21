<template>
  <div class="new-revenue-form">
    <revenue-form
      :initialData="model"
      v-on:submit="submit"
    >
    </revenue-form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import RevenueForm from "@/components/RevenueForm";
  import formData from "@/mixins/formData";

  export default {
    components: {
      RevenueForm,
    },
    mixins: [formData],
    methods: {
      submit(payload) {
        this.insert(payload);
      },
      ...mapActions({
        insert: "insertRevenue",
      }),
    },
  };
</script>

<style lang="scss"></style>
