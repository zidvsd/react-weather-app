export const time = () => {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const time = new Date();
  const hrs = time.getHours();
  const mins = time.getMinutes();
  const dayNum = weekDay[time.getDay()];
  const dayStr = time.getDay();
  const monthStr = month[time.getMonth()];
  const FormattedTime = `${hrs}:${mins.toString().padStart(2, 0)}`;

  return {
    FormattedTime,
    dayStr,
    dayNum,
    monthStr,
  };
};
