import { readUserData, writeUserData } from "./firebase.mjs";

var name, A1, A2, A3, A4, B1, B2, B3, B4;
readUserData(name, A1, A2, A3, A4, B1, B2, B3, B4);

const time = Date.now();
const location = document.getElementById("location");
setCycle();

function setCycle() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const funcARanges = [
    { startMonth: 8, endMonth: 9, startDate: 16, endDate: 12 },
    { startMonth: 10, endMonth: 11, startDate: 10, endDate: 17 },
    { startMonth: 1, endMonth: 2, startDate: 9, endDate: 2 },
    { startMonth: 3, endMonth: 4, startDate: 18, endDate: 19 },
  ];

  const funcBRanges = [
    { startMonth: 9, endMonth: 10, startDate: 13, endDate: 6 },
    { startMonth: 11, endMonth: 12, startDate: 27, endDate: 21 },
    { startMonth: 2, endMonth: 3, startDate: 20, endDate: 14 },
    { startMonth: 5, endMonth: 5, startDate: 6, endDate: 30 },
  ];

  let funcToExecute = null;

  for (const range of funcARanges) {
    if (
      (currentMonth === range.startMonth &&
        currentDate.getDate() >= range.startDate) ||
      (currentMonth === range.endMonth &&
        currentDate.getDate() <= range.endDate)
    ) {
      funcToExecute = () => setLocation(A1, A2, A3, A4);
      break;
    }
  }

  if (!funcToExecute) {
    for (const range of funcBRanges) {
      if (
        (currentMonth === range.startMonth &&
          currentDate.getDate() >= range.startDate) ||
        (currentMonth === range.endMonth &&
          currentDate.getDate() <= range.endDate)
      ) {
        funcToExecute = () => setLocation(B1, B2, B3, B4);
        break;
      }
    }
  }

  if (funcToExecute) {
    funcToExecute();
  } else {
    console.log("No matching date range found.");
  }
}

function setLocation(param1, param2, param3, param4) {
  console.log(
    `setLocation called with params: ${param1}, ${param2}, ${param3}, ${param4}`
  );
}

function setLocation(one, two, three, four) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const currentMinutesSinceMidnight = currentHour * 60 + currentMinute;

  const timePeriods = [
    { start: 9 * 60 + 8, end: 10 * 60 + 23 },
    { start: 10 * 60 + 26, end: 11 * 60 + 41 },
    { start: 12 * 60 + 14, end: 12 * 60 + 59 },
    { start: 13 * 60 + 2, end: 14 * 60 + 17 },
    { start: 14 * 60 + 20, end: 15 * 60 + 35 },
  ];

  for (let i = 0; i < timePeriods.length; i++) {
    const period = timePeriods[i];
    if (
      currentMinutesSinceMidnight >= period.start &&
      currentMinutesSinceMidnight <= period.end
    ) {
      switch (i) {
        case 0:
          console.log("Executing for 9:08-10:23");
          location.innerText = one;
          break;
        case 1:
          console.log("Executing for 10:26-11:41");
          location.innerText = two;
          break;
        case 2:
          console.log("Executing for 12:14-12:59");
          location.innerText = "Flex";
          break;
        case 3:
          console.log("Executing for 13:02-14:17");
          location.innerText = three;
          break;
        case 4:
          console.log("Executing for 14:20-15:35");
          location.innerText = four;
          break;
        default:
          console.log("No matching time period found.");
      }
      break;
    }
  }
}
