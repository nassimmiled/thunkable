export const formatDate = (date) => {
  const monthName = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const day = date.getDate();
  let dd = "am";
  let hours = date.getHours();

  if (hours >= 12) {
    hours = hours - 12;
    dd = "pm";
  }
  if (hours === 0) {
    hours = 12;
  }

  return `${monthName} ${day}, ${year}  ${hours}:${minutes}${dd}`;
};
