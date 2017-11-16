<template>
  <div class="edit-revenue-form">
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
  import RevenueService from "@/services/revenues";
  import formData from "@/mixins/formData";

  export default {
    components: {
      RevenueForm,
    },
    mixins: [formData],
    created() {
      RevenueService.getById(this.$route.params.id)
        .then((data) => { this.model = data; });
    },
    methods: {
      submit(payload) {
        this.update(payload);
      },
      ...mapActions({
        update: "updateRevenue",
      }),
    },
  };
</script>

<style lang="scss">

</style>
