const dateForm = document.getElementById("id_date_form");
const countDownBox = document.getElementById("id_countdown_div");

dateForm.addEventListener("submit", e =>{
    e.preventDefault();
    const dateInput = document.getElementById("id_date_input");
    const timeInput = document.getElementById("id_time_input");
    const eventDate = Date.parse(dateInput.value + " " + timeInput.value); //concats input data and time together

    window.eventCountdown && clearInterval(window.eventCountdown) // calling a function

    const eventCountdown = setInterval(() =>{
        const now = new Date().getTime(); // gets current time
        const diff = +(eventDate) - +(now); //  find the difference between set date time and current time
        window.eventCountdown = eventCountdown;

        // time dividers
        const daysDivider = 1000 * 60 * 60 * 24;
        const hoursDivider = 1000 * 60 * 60;
        const minutesdivider = 1000 * 60;
        const secondsDivider = 1000;

        //formula to calculate the time remaining
        const d = Math.floor(diff / daysDivider);
        const h = Math.floor(diff / hoursDivider % 24);
        const m = Math.floor(diff / minutesdivider % 60);
        const s = Math.floor(diff / secondsDivider  % 60);

        if(diff > 0){
            countDownBox.innerHTML = `<b>${d} days, ${h} hours, ${m} minutes, ${s} seconds</b>`;
        }else{
            countDownBox.innerHTML = "<b>Countdown completed</b>"
        }
        
    },1000);
});