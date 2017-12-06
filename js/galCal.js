export class Calculator {

  constructor(age, year, month, day) {
    this.age = age;
    this.year = year;
    this.month = month;
    this.day = day;
}



  reduceAgeToSeconds() {
    return parseInt(this.age) * 3.154e+7;
  }

  figureAge() {
    const today = new Date();
    let birthday = new Date();
    birthday.setFullYear(parseInt(this.year), parseInt(this.month), parseInt(this.day));
    let diffInSecs = Math.abs(today.getTime() - birthday.getTime());
    console.log(diffInSecs);
    return Math.round(diffInSecs / 31540000001.011199951);
}



// 1 Day = 86400 seconds
//
// 1 EarthYear = 365.2425 days = 31556952 seconds
// Avg EarthMonth = 30.42 days = 2628288 seconds
//
// 1 MercuryYear = 88 days = 7603200 seconds
// 1 VenusYear = 225 days = 19440000 seconds
// 1 MarsYear = 687 days = 59356800 seconds
// 1 JupiterYear = 4,300 days = 371520000 seconds
//

    // let dateInSec = Date.now();
    // dateInSec = parseInt(dateInSec) / 1000;
    // let totalDateInSec = dateInSec + 62167195440;
    //
    // let birthYearInSeconds = 31556952 * year;
    // let birthMonthInSeconds = 2628288 * month;
    // let birthDayInSeconds = 86400 * day;
    //
    // console.log(birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds);
    // console.log(totalDateInSec);
    //
    // console.log((birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds) / 31556952);
    // console.log(totalDateInSec / 31556952);
    //
    // let figAgeInSec = totalDateInSec - (birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds);
    // console.log(figAgeInSec);
    // console.log(figAgeInSec / 31556952);
    // console.log(Math.floor(figAgeInSec / 31556952));
    // return Math.floor(figAgeInSec / 31556952);
  // }







  // figureAge(year, month, day) {
  //   let dateInSec = Date.now();
  //   dateInSec = parseInt(dateInSec) / 1000;
  //   let totalDateInSec = dateInSec + 62167195440;
  //
  //   let birthYearInSeconds = 31556952 * year;
  //   let birthMonthInSeconds = 2628288 * month;
  //   let birthDayInSeconds = 86400 * day;
  //
  //   console.log(birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds);
  //   console.log(totalDateInSec);
  //
  //   console.log((birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds) / 31556952);
  //   console.log(totalDateInSec / 31556952);
  //
  //   let figAgeInSec = totalDateInSec - (birthYearInSeconds + birthMonthInSeconds + birthDayInSeconds);
  //   console.log(figAgeInSec);
  //   console.log(figAgeInSec / 31556952);
  //   console.log(Math.floor(figAgeInSec / 31556952));
  //   return Math.floor(figAgeInSec / 31556952);
  // }


}
