## Countdown Timer using JavaScript
* This simple project uses JavaScript to make the time countdown possible

> This simple process is achieved using the formula as follows:

```
const eventDate = Date.parse(dateInput.value + " " + timeInput.value); //concats input data and time together
const now = new Date().getTime(); // gets current time
const diff = +(eventDate) - +(now); //  find the difference between set date time and current time

// time dividers
const daysDivider = 1000 * 60 * 60 * 24;
const hoursDivider = 1000 * 60 * 60;
const minutesdivider = 1000 * 60;
const secondsDivider = 1000
//formula to calculate the time remaining
const d = Math.floor(diff / daysDivider);
const h = Math.floor(diff / hoursDivider % 24);
const m = Math.floor(diff / minutesdivider % 60);
const s = Math.floor(diff / secondsDivider  % 60);

```
> Need to fit this formula in a function that runs on a interval 

## Happy Learning 😊