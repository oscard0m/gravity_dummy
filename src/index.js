import moment from "moment";

const date = moment("2025-03-12");
const oneWeekLater = date.add(1, "week");

console.log(oneWeekLater.format("YYYY-MM-DD"));
