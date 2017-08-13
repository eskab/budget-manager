import moment from "moment";

export default [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Date",
    key: "date",
    render: (h, params) =>
      h("div", {}, moment(params.row.date).format("DD-MM-YYYY")),
  },
  {
    title: "Category",
    key: "category",
  },
  {
    title: "Cost",
    key: "cost",
  },
];
