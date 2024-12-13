import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
} from "date-fns";

export const dtBefore = (date) => {
  const now = new Date();
  const minutesAgo = differenceInMinutes(now, date);
  const hoursAgo = differenceInHours(now, date);
  const daysAgo = differenceInDays(now, date);
  const monthsAgo = differenceInMonths(now, date);

  if (monthsAgo >= 1) {
    return monthsAgo > 1 ? `${monthsAgo} months ago` : "1 month ago";
  }
  if (daysAgo >= 1) {
    return daysAgo > 1 ? `${daysAgo} days ago` : "Yesterday";
  }
  if (hoursAgo >= 1) {
    return hoursAgo > 1 ? `${hoursAgo} hours ago` : "1 hour ago";
  }
  if (minutesAgo >= 1) {
    return minutesAgo > 1 ? `${minutesAgo} minutes ago` : "1 minute ago";
  }
  return "Just now";
};
