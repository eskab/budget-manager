export default {
  title: "Budget manager",
  menu: {
    home: "Home",
    expenditures: {
      name: "Expenditure",
      new: "New expenditure",
      list: "Expenditures",
      emptyList: "In order to see expenditures you have to add one",
    },
    revenues: {
      name: "Revenues",
      new: "New revenue",
      list: "Revenues",
      emptyList: "In order to see revenues you have to add one",
    },
    configuration: {
      name: "Configuration",
    },
  },
  notifications: {
    success: {
      expenditure: {
        post: "Posting expenditure succeeded",
        put: "Putting expenditure succeeded",
        delete: "Deleting expenditure succeeded",
      },
    },
    error: {
      expenditure: {
        fetch: "Error during fetching",
        post: "Posting expenditure error",
        put: "Putting expenditure error",
        delete: "Deleting expenditure error",
      },
    },
  },
};
