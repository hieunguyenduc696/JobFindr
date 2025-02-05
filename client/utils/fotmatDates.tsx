import moment from "moment";
import "moment/locale/vi";
export const formatDates = (date: string, locale: string = "en") => {
  moment.locale(locale);
  return moment(date).fromNow();
};
