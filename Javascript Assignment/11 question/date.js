//- What is the year today?
let date_now = new Date()
console.log(date_now.getFullYear())

//- What is the month today as a number?
console.log(date_now.getMonth())

//- What is the date today?
console.log(date_now.getDate())

//- What is the day today as a number?
console.log(date_now.getDay())

//- What is the hours now? 
console.log(date_now.getHours())

// - What is the minutes now?
console.log(date_now.getMinutes())

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(date_now.getTime() / 1000))