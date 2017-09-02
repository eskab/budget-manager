export const initialModel = () => ({
  id: null,
  name: null,
  date: null,
  category: null,
  cost: null,
});

export default {
  data() {
    return {
      model: initialModel(),
    };
  },
  methods: {
    resetForm() {
      this.model = initialModel();
    },
  },
};
