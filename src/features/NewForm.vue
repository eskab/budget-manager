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
        <input name="date" v-model="date">
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
      <div class="form__input-group">
        <label>Month</label>
        <input type="number" name="month" v-model="month">
      </div>
      <button class="form__button">Submit</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import Heading from "@/components/Header";
  import homeResources from "@/resources/home";

  export default {
    components: {
      heading: Heading,
    },
    data() {
      return {
        name: null,
        date: null,
        category: null,
        cost: null,
        month: null,
        title: homeResources.menu.new,
        categoryOptions: [
          "Food", "Bills",
        ],
      };
    },
    methods: {
      submit() {
        this.insert({
          name: this.name,
          date: this.date,
          category: this.category,
          cost: this.cost,
          month: this.month,
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
