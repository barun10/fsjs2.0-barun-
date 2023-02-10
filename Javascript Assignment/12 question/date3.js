let now_date = new Date()
let day = now_date.getDate()
let month = now_date.getMonth() + 1
let year = now_date.getFullYear()
let hours = now_date.getHours()
let minutes = now_date.getMinutes()
if (day < 10)
  day = '0' + day
if (month < 10)
  month = '0' + month
if (hours < 10)
  hours = '0' + hours
if (minutes < 10)
  minutes = '0' + minutes
//    YYYY-MM-DD HH:mm
console.log(year + "-" + month + "-" + day + " " + hours + ":" + minutes)
//    DD-MM-YYYY HH:mm
console.log(day + "-" + month + "-" + year + " " + hours + ":" + minutes)
//    DD/MM/YYYY HH:mm
console.log(day + "/" + month + "/" + year + " " + hours + ":" + minutes)