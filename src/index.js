import { parseISO, addWeeks, format } from "date-fns";

const date = parseISO("2025-03-12");
const oneWeekLater = addWeeks(date, 1);

console.log(format(oneWeekLater, "yyyy-MM-dd"));
