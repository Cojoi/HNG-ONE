const date = new Date();
const utcTime = date.toUTCString();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayOfWeek = days[date.getUTCDay()];

document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
document.querySelector('[data-testid="currentDay"]').textContent = currentDayOfWeek;
