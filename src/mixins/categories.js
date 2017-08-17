import DictionariesService from "@/services/dictionaries";

export default {
  data() {
    return {
      categoriesDictionary: null,
    };
  },
  created() {
    DictionariesService.fetch()
      .then(data => data.map(({ code }) => code))
      .then((data) => { this.categoriesDictionary = data; });
  },
};
