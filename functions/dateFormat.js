module.exports = {

  //function to add th,st,nd,rd to the day of the month
  //d is the day of the month
  nth(d) {
    if(d>3 && d<21) return d+'th';
    switch (d % 10) {
          case 1:  return d+"st";
          case 2:  return d+"nd";
          case 3:  return d+"rd";
          default: return d+"th";
      }
  },

  //function to create a formatted date string
  //date is the unformatted date object, 
  //incTime is whether to include the time in the final string,
  //incWeek is whether to include the weekday in the final string,
  //incYear is whether to include the year in the final string
  getDateStr(date,incTime=true,incWeek=true,incYear=false) {

    //set initial variables
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let time;
    let dateStr = "";
    let month;
    let day;
    let weekDay;

    //add the weekday to the beginning
    if (incWeek) {
      weekDay = days[date.getDay()];
      dateStr = weekDay+",";
    }

    //calculate the day of the month
    day = this.nth(date.getDate());

    //calculate the month
    month = months[date.getMonth()];

    //add the day and month to the final string
    dateStr = dateStr+" "+month+" "+day

    //add the year to the final string
    if (incYear) {
      year = date.getFullYear();
      dateStr = dateStr+" "+year;
    }

    //add the time to the final string
    if (incTime) {
      time = this.getTimeStr(date);
      dateStr = dateStr+" "+time;
    }

    //return the date string
    return dateStr;
  },

  //format the time
  //date is the date object that has the time
  getTimeStr(date) {
    
    //get the time in the current local
    let time = date.toLocaleTimeString('en-US');
    //slice off the seconds
    time = time.slice(0,time.indexOf(':',4)) + time.slice(time.indexOf(':',4)+3);
    return time;
  }
}