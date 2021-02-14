'use strict';


// Array for business work 
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Profile for store 

let Seattle = {
    name:'Seattle',
    // this customer per hour 
    minCustomers : 0,
    maxCustomers :0,
    AvgCookies  :0,
    cookiesHourly :[],
    }

  function randomCustomer(params) {
      let i =0;
      if (i=0,i<= hours.length,i++) {
        Seattle.cookiesHourly.push (Math.floor( Math.random()*(max-min+1)+min));
      }
      console.log(Seattle.cookiesHourly);
  }

