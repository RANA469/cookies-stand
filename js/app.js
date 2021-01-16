'use strict';
var numofhours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
    '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function HourlyTotal(hour, numberOfCookiesPerHour) {
    this.hour = hour;
    this.numberOfCookiesPerHour = numberOfCookiesPerHour;
}

HourlyTotal.prototype.toString = function () {
    return (
        this.hour + ": " + Math.floor(this.numberOfCookiesPerHour) + " cookies"
    );
};
function Shop(
    location,
    minNumberOfCustomer,
    maxNumberOfCustomer,
    averageCookiesPerSale

) {
    this.location = location;
    this.minNumberOfCustomer = minNumberOfCustomer;
    this.maxNumberOfCustomer = maxNumberOfCustomer;
    this.averageCookiesPerSale = averageCookiesPerSale;
}
Shop.prototype.calculateNumberOfHourlyTotal = function () {
    var result = [];
    for (var i = 0; i < numofhours.length; i++) {
        var randomNumberOfCustmes = Math.floor(
            Math.random() *
            (this.maxNumberOfCustomer - this.minNumberOfCustomer + 1) +
            this.minNumberOfCustomer);
        var numberOfCookies = Math.ceil(
            randomNumberOfCustmes * this.averageCookiesPerSale
        );
        result[i] = new HourlyTotal(numofhours[i], numberOfCookies);
    }
    return result;
};
Shop.prototype.asHTML = function () {
    var shopRaw = document.createElement("tr");
    var locationtd = document.createElement("td");
    locationtd.textContent = this.location;
    shopRaw.appendChild(locationtd);
    var totals = this.calculateNumberOfHourlyTotal();
    var sum = 0;
    for (var j = 0; j < totals.length; j++) {
        var randomdata = document.createElement("td")
        shopRaw.appendChild(randomdata);
        randomdata.textContent = totals[0].numberOfCookiesPerHour;
        sum += totals[0].numberOfCookiesPerHour;
    }
    var randomdata = document.createElement("td");
    shopRaw.appendChild(randomdata);
    randomdata.textContent = sum;
    return shopRaw;
};

var seattle = new Shop('seattle', 23, 65, 6, 3);
var tokyo = new Shop('tokyo', 3, 24, 1, 2);
var Dubai = new Shop('Dubai', 11, 38, 3, 7);
var Paris = new Shop('Paris', 20, 38, 2, 3);
var lima = new Shop('lima', 2, 16, 4, 6);

var shops = [seattle, Dubai, tokyo, Paris, lima];

var form = document.getElementById("store-data");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //     var location = document.getElementById("branch-name").Value;
    //     var minNumberOfCustomer = parseInt(event.target.minNumberOfCustomer);
    //     var maxNumberOfCustomer = parseInt(event.target.maxNumberOfCustomer);
    //     var averageCookiesPerSale = parseInt(event.target.averageCookiesPerSale.value);
    //     if((name!== null || name!==" ")&&(minCustomerPerHour!== null ||minCustomerPerHour!==" ")&&(maxCustomerPerHour!== null ||maxCustomerPerHour!==" "))
    // {
    //     var addbranch = new branch(name,minCustomerPerHour,maxCustomerPerHour,averCookiesPerSale)
    //     var section = document.getElementById("locations");
    //     section.innerHTML='';
    //     headertag();
    //     for(var h=0;h<branches.length;h++){
    //         branches[i].gitCustomerPerHour;
    //         branches[i].getCookiesPerHour;
    //         branches[i].render();
    //     }
    //     tableContainer();
    // }
    // else{
    //     alert('please insert a value');
    // }
    var shop = new shop(
        location,
        minCustomerPerHour,
        maxCustomerPerHour,
        averCookiesPerSale
    );
    shops.push(shop);
    tableContainer.innerHtml = "";
    renderTable();
});

var tableContainer = document.createElement("div");
document.body.appendChild(tableContainer);


function renderTable() {
    var tabel = document.createElement("table");
    var headerRow = document.createElement("tr");
    var headerOne = document.createElement("th");
    headerOne.textContent = "";
    headerRow.appendChild(headerOne);

    for (var i = 0; i < numofhours.length; i++) {
        var header = document.createElement("th");
        header.textContent = numofhours[i];
        headerRow.appendChild(header);
    }
    var totalHeader = document.createElement("th");
    headerRow.appendChild(totalHeader);
    totalHeader.textContent = "Daily location Total";

    tabel.appendChild(headerRow);
    for (var y = 0; y < shops.length; y++) {
        var shop = shops[y];
        tabel.appendChild(shop.asHTML());
    }
    tableContainer.appendChild(tabel);
}
renderTable(Shop);
