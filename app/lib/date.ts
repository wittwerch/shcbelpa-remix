import { DateTime } from "luxon";

export const formatDateFromIsoString = (dateString: string) => {
  const date = DateTime.fromISO(dateString);

  if (date.isValid) {
    return date.toFormat("dd.MM.yyyy");
  }

  return "-"; // invalid date
};

export const formatDateTimeFromIsoString = (dateString: string) => {
  const date = DateTime.fromISO(dateString);

  if (date.isValid) {
    return date.toFormat("dd.MM.yyyy, HH:mm");
  }

  return "-"; // invalid date
};

export const shortDateTime = (dateString: string) => {
  const date = DateTime.fromISO(dateString);

  if (date.isValid) {
    return date.toFormat("LLL dd @HH:mm");
  }

  return "-"; // invalid date
};
