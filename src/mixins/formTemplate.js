export default {
  props: ["initialData"],
  computed: {
    model() {
      return {
        id: this.initialData.id,
        name: this.initialData.name,
        date: this.initialData.date,
        category: this.initialData.category,
        cost: this.initialData.cost,
      };
    },
  },
  methods: {
    submit() {
      this.$emit("submit", this.model);
    },
  },
};
