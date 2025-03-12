import moment from "moment";

const date = moment("2016-01-01");
const oneWeekLater = date.add(1, "week");

console.log(oneWeekLater.format("YYYY-MM-DD"));