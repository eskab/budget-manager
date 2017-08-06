<template>
  <div class="new">
    <heading :title="title"></heading>
    <form class="form" v-on:submit.prevent="submit">
      <div class="form__input-group">
        <label>Name</label>
        <input name="name" v-model="name">
      </div>
      <div class="form__input-group">
        <label>Date</label>
        <date-picker v-model="date"></date-picker>
      </div>
      <div class="form__input-group">
        <label>Category</label>
        <select v-model="category" name="category">
          <option v-for="categoryOption in categoryOptions">
            {{ categoryOption }}
          </option>
        </select>
      </div>
      <div class="form__input-group">
        <label>Cost</label>
        <input type="number" name="cost" v-model="cost">
      </div>
      <button class="form__button">Submit</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import datePicker from "vuejs-datepicker";
  import moment from "moment";
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";

  export default {
    components: {
      heading: Heading,
      datePicker,
    },
    data() {
      return {
        name: null,
        date: null,
        category: null,
        cost: null,
        title: homeResources.menu.new,
        // todo: move it to dictionaries
        categoryOptions: [
          "Food", "Bills",
        ],
      };
    },
    methods: {
      submit() {
        this.insert({
          name: this.name,
          date: moment(this.date).format("DD-MM-YYYY"),
          category: this.category,
          cost: this.cost,
        });
      },
      ...mapActions({
        insert: "insertExpenditure",
      }),
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
