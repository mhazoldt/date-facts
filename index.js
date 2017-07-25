var moment = require('moment')
var chalk = require('chalk')

console.log("It is " + chalk.bold.cyan(moment().format("dddd MMMM, Do YYYY, hh:mm:ss a")) + ".")
console.log("It is the " + chalk.bold.magenta(moment().format("DDDo")) + " day of the year")

let nowInSeconds = moment().unix()
let startOfDayInSeconds = moment().startOf('day').unix()
let secondsIntoDay = nowInSeconds - startOfDayInSeconds

console.log("It is " + chalk.bold.blueBright(secondsIntoDay) + " seconds into the year")
if(moment().isDST()) {
  console.log("It " + chalk.bold.green("is") + " during daylight savings time")
} else {
  console.log("It " + chalk.bold.red("is not") + " during daylight savings time")
}
if(moment().isLeapYear()) {
  console.log("It " + chalk.bold.green("is") + " a leap year.")
} else {
  console.log("It " + chalk.bold.red("is not") + " a leap year.")
}
