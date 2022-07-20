import moment from "moment";

export const dmy = (date: Date) => {
  return moment(date).format("MMM DD YYYY");
};
