<template>
  <form class="form" v-on:submit.prevent="submit">
    <div class="form__input-group">
      <label>Name</label>
      <input name="name" v-model="model.name">
    </div>
    <div class="form__input-group">
      <label>Date</label>
      <date-picker v-model="model.date"></date-picker>
    </div>
    <div class="form__input-group">
      <label>Category</label>
      <select v-model="model.category" name="category">
        <option v-for="category in categories">
          {{ category }}
        </option>
      </select>
    </div>
    <div class="form__input-group">
      <label>Cost</label>
      <input type="number" name="cost" v-model="model.cost">
    </div>
    <button class="form__button">Submit</button>
  </form>
</template>

<script>
  import datePicker from "vuejs-datepicker";
  import DictionariesService from "@/services/dictionaries";

  export default {
    components: {
      datePicker,
    },
    props: ["initialData"],
    data() {
      return {
        categories: null,
      };
    },
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
    created() {
      DictionariesService.fetch()
        .then(data => data.map(({ code }) => code))
        .then((data) => { this.categories = data; });
    },
    methods: {
      submit() {
        this.$emit("submit", this.model);
      },
    },
  };
</script>

<style lang="scss">
  .form {
    display: flex;
    flex-flow: column wrap;
    margin: 20px 0;

    &__input-group {
      margin: 3px 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      label {
        font-size: 12px;
        margin-right: 5px;
        width: 5%;
      }

      input, select {
        border: 1px solid #ddd;
        padding: 5px;
        color: #555;
        width: 200px;
        box-sizing: border-box;
      }
    }

    &__button {
      margin: 10px 0;
      width: 10%;
    }
  }
</style>
