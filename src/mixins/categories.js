import DictionariesService from "@/services/dictionaries";

export default {
  data() {
    return {
      categories: null,
    };
  },
  created() {
    DictionariesService.fetch()
      .then(data => data.map(({ code }) => code))
      .then((data) => { this.categories = data; });
  },
};
