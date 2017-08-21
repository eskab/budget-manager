import moment from "moment";

export default (errorCb, editCb) => [
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
    title: "Amount",
    key: "cost",
  },
  {
    title: "Actions",
    key: "actions",
    width: 150,
    align: "center",
    render: (h, params) =>
      h("div", [
        h("Button", {
          props: {
            type: "error",
            size: "small",
          },
          on: {
            click: () => errorCb(params.row.id),
          },
        }, "Delete"),
        h("Button", {
          props: {
            type: "primary",
            size: "small",
          },
          on: {
            click: () =>
              editCb({
                name: "revenuesEdit",
                params: {
                  id: params.row.id,
                },
              }),
          },
        }, "Edit"),
      ]),
  },
];
