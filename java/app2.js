'use strict';
// Array for business work hours , it Global because it will be used many times
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Profile for stores
// it is better to be as a const , it can not be changed(type)
//Global function random 
function random(min, max) {
    // this return give us random number between min and max 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function LocationName(storeLocation, minCustomers, maxCustomers, AvgCookies) {
    this.storeLocation = storeLocation;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.AvgCookies = AvgCookies;
    this.customerPerHour = [];
    this.cookiesForEachHour = [];
    this.total = 0;
}

LocationName.prototype.calculateCustomersPerHour = function() {
    for (let i = 0; i < hours.length; i++) {
        this.customerPerHour.push(random(this.minCustomers, this.maxCustomers));
    }
}

LocationName.prototype.calCookiesForEachHour = function() {

    this.total = 0;
    for (let i = 0; i < hours.length; i++) {
        LocationName.cookiesForEachHour.push(Math.floor(this.customerPerHour[i] * this.AvgCookies));
        this.total += LocationName.cookiesForEachHour[i];
    }
}

LocationName.prototype.render = function() {
    //get parent element by id
    let parent = document.getElementById('parent');
    // for check , use  console.log(parent)
    console.log(parent);
    // now we will put elements in
    let tableForShop = document.createElement('table');
    parent.appendChild(tableForShop);

    let tableRaw = document.createElement('td');
    tableForShop.appendChild(tableRaw);
    shopName.textContent = this.storeLocation;

}

let Seattle = new LocationName(Seattle, 23, 65, 6.3);
console.log(Seattle);


let Tokyo = new LocationName(Tokyo, 3, 24, 1.2);
console.log(Tokyo);

let Dubai = new LocationName(Dubai, 11, 38, 3.7);
console.log(Dubai);

let Paris = new LocationName(Paris, 20, 38, 2.3);
console.log(Paris);

let Lima = new LocationName(Lima, 2, 16, 4.6);
console.log(Lima);