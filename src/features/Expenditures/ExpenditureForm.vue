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
            <Option v-for="category in categoriesDictionary" :value="category" :key="category">
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
  import categories from "@/mixins/categories";
  import formTemplate from "@/mixins/formTemplate";

  export default {
    mixins: [categories, formTemplate],
  };
</script>

<style lang="scss"></style>
