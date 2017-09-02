export default {
  props: {
    model: {
      type: Object,
      default() {
        return {
          id: null,
          name: null,
          date: null,
          category: null,
          cost: null,
        };
      },
    },
  },
  methods: {
    submit() {
      this.$emit("submit", this.model);
    },
  },
};
