import moment from "moment";

// Todo - refactor
export default ([startDate, endDate]) => ({ date }) => {
  const dateObject = moment(date);

  return (!startDate && !endDate) || ((
    dateObject.isSame(startDate, "day") || dateObject.isAfter(startDate, "day")
  ) && (
    dateObject.isSame(endDate, "day") || dateObject.isBefore(endDate, "day")
  ));
};
