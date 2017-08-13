<template>
  <Row>
    <Col span="6">
      <Form :model="model" :label-width="80">
        <Form-item label="Name">
          <Input name="name" v-model="model.name"></Input>
        </Form-item>
        <Form-item label="Date">
          <date-picker type="date" v-model="model.date"></date-picker>
        </Form-item>
        <Form-item label="Category">
          <Select v-model="model.category" name="category">
            <Option v-for="category in categories" :value="category" :key="category">
              {{ category }}
            </Option>
          </Select>
        </Form-item>
        <Form-item label="Cost">
          <InputNumber v-model="model.cost"></InputNumber>
        </Form-item>
        <Form-item>
          <Button type="primary" v-on:click.prevent="submit">Submit</Button>
        </Form-item>
      </Form>
    </Col>
  </Row>
</template>

<script>
  import DictionariesService from "@/services/dictionaries";

  export default {
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

<style lang="scss"></style>
