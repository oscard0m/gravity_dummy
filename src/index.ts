import { parseISO, addWeeks, format } from "date-fns";

const date = parseISO("2016-01-01");
const oneWeekLater = addWeeks(date, 1);

console.log(format(oneWeekLater, "yyyy-MM-dd"));
