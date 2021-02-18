'use strict';
//this array for hour work 

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//console.log(hours.length);

function random(min, max) {
    // this return give us random number between min and max 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//this array for all new object 
let shops = [];


function ShopName(name, minCustomers, maxCustomers, avgCookies) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalCookieshEachHour = 0;
    shops.push(this);
}

ShopName.prototype.calculateCustomersEachHour = function() {
    for (let i = 0; i < hours.length; i++) {

        this.customersEachHour.push(random(this.minCustomers, this.maxCustomers))

    }
}
ShopName.prototype.calculateCookiesEachHour = function() {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
        this.totalCookieshEachHour += this.cookiesEachHour[i]
    }
}

let seattle = new ShopName("Seattle", 23, 65, 6.3);
let tokyo = new ShopName("Tokyo", 3, 24, 1.2);
let dubai = new ShopName("Dubai", 11, 38, 3.7);
let paris = new ShopName("Paris", 20, 38, 2.3);
let lima = new ShopName("Lima", 2, 16, 4.6);


//console.log(lima);
//make table 
let parent = document.getElementById("parent")
    //console.log(parent);
let table = document.createElement('table');
parent.appendChild(table);

//make header row
// the first and last one alone , betweeen them loop
function makeHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let firstTh = document.createElement('th');
    firstTh.textContent = 'name';
    headerRow.appendChild(firstTh);
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent = hours[i];
    }
    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = 'daily total';
}

ShopName.prototype.makeCells = function() {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    // data for name 
    let nameData = document.createElement('td');
    dataRow.appendChild(nameData);
    nameData.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesEachHour[i];
        dataRow.appendChild(tdElement);
    }
    // total calls 
    let totalDataForEachShop = document.createElement('td');
    dataRow.appendChild(totalDataForEachShop);
    totalDataForEachShop.textContent = this.totalCookieshEachHour;
}

let makeFooter = function() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = "totals";
    let TotalOfAll = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalEachHour = 0;
        for (let j = 0; j < shops.length; j++) {
            totalEachHour += shops[j].cookiesEachHour[j];
            TotalOfAll += shops[j].cookiesEachHour[j];
        }
        footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalEachHour;
    }
    let finalTh = document.createElement('th');
    footerRow.appendChild(finalTh);
}
makeHeader();
console.log(parent);
//this loop for call methods ,   shops[i] have name of new object after . we call function
for (let i = 0; i < shops.length; i++) {
    shops[i].calculateCustomersEachHour();
    shops[i].calculateCookiesEachHour();
    shops[i].makeCells();
}
makeFooter();

let buttunClickHere = getElementById('buttun1');
buttunClickHere.addEventListener('click', makePargraphForClik);

function makePargraphForClik() {
    let paragraph = document.createElement('p');
    parent.appendChild(paragraph);
    paragraph.textContent = 'This is show because you click';
}