'use strict';


// Array for business work hours , it Global because it will be used many times

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Profile for stores
// it is better to be as a const , it will not be changed(type)
//Global function random 
function random(min, max) {
  // this return give us random number between min and max 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Object prfile i copy the second one from here 
const Seattle = {
  locationName: 'Seattle',
  // this Data from lab, 
  //minCustomers and maxCustomers per hour 
  minCustomers: 23,
  maxCustomers: 65,
  AvgCookies: 6.3,
  total: 0,
  // we need to git random number of customers ber hour, by array
  customerPerHour: [],
  calculateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.customerPerHour.push(random(this.minCustomers, this.maxCustomers));
    }
  },
  //we need array for multiplay AvgCookies by customerPerHour so we git avgCookiesForEachHour
  CookiesForEachHour: [],
  // we need function to calCookiesForEachHour
  calCookiesForEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.CookiesForEachHour.push(Math.floor(this.customerPerHour[i] * this.AvgCookies));
      // this line for total elemet , put it in loop to calculate random number thar we had
      this.total += this.CookiesForEachHour[i];
    }

  },
  // we need to Show elements  by render in our page
  render: function () {
    //get parent element by id 
    let parent = document.getElementById('parent');
    // for check , use  console.log(parent)
    console.log(parent);
    // now we will put elements in
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    // give it text 
    shopName.textContent = this.locationName;
    //put all lists 

    // now ceate element (ul) 
    let unorderedList = document.createElement('ul');
    //  put ul in parent (append)
    parent.appendChild(unorderedList);
    // create li in ul the items is so much so we need for loop
    for (let i = 0; i < hours.length; i++) {
      //create li
      let listItem = document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give it text 
      listItem.textContent = `${hours[i]}: ${this.CookiesForEachHour[i]} cookies`
    }
    // show total 
    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `the total is: ${this.total}cookies`;
  }
}

Seattle.calculateCustomersPerHour();
Seattle.calCookiesForEachHour();
Seattle.render();
console.log(Seattle)
// finish the first profile 



//Object prfile second one 
const tokyo = {
  locationName: 'tokyo',
  // this Data from lab, 
  //minCustomers and maxCustomers per hour 
  minCustomers: 3,
  maxCustomers: 24,
  AvgCookies: 1.2,
  total: 0,
  // we need to git random number of customers ber hour, by array
  customerPerHour: [],
  calculateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.customerPerHour.push(random(this.minCustomers, this.maxCustomers));
    }
  },
  //we need array for multiplay AvgCookies by customerPerHour so we git avgCookiesForEachHour
  CookiesForEachHour: [],
  // we need function to calCookiesForEachHour
  calCookiesForEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.CookiesForEachHour.push(Math.floor(this.customerPerHour[i] * this.AvgCookies));
      // this line for total elemet , put it in loop to calculate random number thar we had
      this.total += this.CookiesForEachHour[i];
    }

  },
  // we need to Show elements  by render in our page
  render: function () {
    //get parent element by id 
    let parent = document.getElementById('parent');
    // for check , use  console.log(parent)
    console.log(parent);
    // now we will put elements in
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    // give it text 
    shopName.textContent = this.locationName;
    //put all lists 

    // now ceate element (ul) 
    let unorderedList = document.createElement('ul');
    //  put ul in parent (append)
    parent.appendChild(unorderedList);
    // create li in ul the items is so much so we need for loop
    for (let i = 0; i < hours.length; i++) {
      //create li
      let listItem = document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give it text 
      listItem.textContent = `${hours[i]}: ${this.CookiesForEachHour[i]} cookies`
    }
    // show total 
    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `the total is: ${this.total}cookies`;
  }
}

tokyo.calculateCustomersPerHour();
tokyo.calCookiesForEachHour();
tokyo.render();
console.log(tokyo)
// finish the second profile




//Object prfile 3rd one 
const dubai = {
  locationName: 'dubai',
  // this Data from lab, 
  //minCustomers and maxCustomers per hour 
  minCustomers: 11,
  maxCustomers: 38,
  AvgCookies: 3.7,
  total: 0,
  // we need to git random number of customers ber hour, by array
  customerPerHour: [],
  calculateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.customerPerHour.push(random(this.minCustomers, this.maxCustomers));
    }
  },
  //we need array for multiplay AvgCookies by customerPerHour so we git avgCookiesForEachHour
  CookiesForEachHour: [],
  // we need function to calCookiesForEachHour
  calCookiesForEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.CookiesForEachHour.push(Math.floor(this.customerPerHour[i] * this.AvgCookies));
      // this line for total elemet , put it in loop to calculate random number thar we had
      this.total += this.CookiesForEachHour[i];
    }

  },
  // we need to Show elements  by render in our page
  render: function () {
    //get parent element by id 
    let parent = document.getElementById('parent');
    // for check , use  console.log(parent)
    console.log(parent);
    // now we will put elements in
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    // give it text 
    shopName.textContent = this.locationName;
    //put all lists 

    // now ceate element (ul) 
    let unorderedList = document.createElement('ul');
    //  put ul in parent (append)
    parent.appendChild(unorderedList);
    // create li in ul the items is so much so we need for loop
    for (let i = 0; i < hours.length; i++) {
      //create li
      let listItem = document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give it text 
      listItem.textContent = `${hours[i]}: ${this.CookiesForEachHour[i]} cookies`
    }
    // show total 
    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `the total is: ${this.total}cookies`;
  }
}

dubai.calculateCustomersPerHour();
dubai.calCookiesForEachHour();
dubai.render();
console.log(dubai)
// finish the 3rd profile



//Object prfile 4th one 
const paris = {
  locationName: 'paris',
  // this Data from lab, 
  //minCustomers and maxCustomers per hour 
  minCustomers: 20,
  maxCustomers: 38,
  AvgCookies: 2.3,
  total: 0,
  // we need to git random number of customers ber hour, by array
  customerPerHour: [],
  calculateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.customerPerHour.push(random(this.minCustomers, this.maxCustomers));
    }
  },
  //we need array for multiplay AvgCookies by customerPerHour so we git avgCookiesForEachHour
  CookiesForEachHour: [],
  // we need function to calCookiesForEachHour
  calCookiesForEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.CookiesForEachHour.push(Math.floor(this.customerPerHour[i] * this.AvgCookies));
      // this line for total elemet , put it in loop to calculate random number thar we had
      this.total += this.CookiesForEachHour[i];
    }

  },
  // we need to Show elements  by render in our page
  render: function () {
    //get parent element by id 
    let parent = document.getElementById('parent');
    // for check , use  console.log(parent)
    console.log(parent);
    // now we will put elements in
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    // give it text 
    shopName.textContent = this.locationName;
    //put all lists 

    // now ceate element (ul) 
    let unorderedList = document.createElement('ul');
    //  put ul in parent (append)
    parent.appendChild(unorderedList);
    // create li in ul the items is so much so we need for loop
    for (let i = 0; i < hours.length; i++) {
      //create li
      let listItem = document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give it text 
      listItem.textContent = `${hours[i]}: ${this.CookiesForEachHour[i]} cookies`
    }
    // show total 
    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `the total is: ${this.total}cookies`;
  }
}

paris.calculateCustomersPerHour();
paris.calCookiesForEachHour();
paris.render();
console.log(paris)
// finish the 4th profile

//Object prfile 5th one 
const lima = {
  locationName: 'lima',
  // this Data from lab, 
  //minCustomers and maxCustomers per hour 
  minCustomers: 2,
  maxCustomers: 16,
  AvgCookies: 4.6,
  total: 0,
  // we need to git random number of customers ber hour, by array
  customerPerHour: [],
  calculateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {

      this.customerPerHour.push(random(this.minCustomers, this.maxCustomers));
    }
  },
  //we need array for multiplay AvgCookies by customerPerHour so we git avgCookiesForEachHour
  CookiesForEachHour: [],
  // we need function to calCookiesForEachHour
  calCookiesForEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.CookiesForEachHour.push(Math.floor(this.customerPerHour[i] * this.AvgCookies));
      // this line for total elemet , put it in loop to calculate random number thar we had
      this.total += this.CookiesForEachHour[i];
    }

  },
  // we need to Show elements  by render in our page
  render: function () {
    //get parent element by id 
    let parent = document.getElementById('parent');
    // for check , use  console.log(parent)
    console.log(parent);
    // now we will put elements in
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    // give it text 
    shopName.textContent = this.locationName;
    //put all lists 

    // now ceate element (ul) 
    let unorderedList = document.createElement('ul');
    //  put ul in parent (append)
    parent.appendChild(unorderedList);
    // create li in ul the items is so much so we need for loop
    for (let i = 0; i < hours.length; i++) {
      //create li
      let listItem = document.createElement('li');
      // append li
      unorderedList.appendChild(listItem);
      // give it text 
      listItem.textContent = `${hours[i]}: ${this.CookiesForEachHour[i]} cookies`
    }
    // show total 
    let totalItem = document.createElement('li');
    unorderedList.appendChild(totalItem);
    totalItem.textContent = `the total is: ${this.total}cookies`;
  }
}

lima.calculateCustomersPerHour();
lima.calCookiesForEachHour();
paris.render();
console.log(lima)
// finish the 5th profile