'use stricit';
var hours = ['6am', '7am', '8am', '9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomCust(MinCust, MaxCust) {
    return Math.floor( Math.random() * (MaxCust - MinCust) + MinCust) ;
}

var Seattle={
Location : 'Seattle',
MinCust :  23,
MaxCust :65,
AvgCookieSale :6.3,

nofcokies:[],
sum:0,
custperhour: function() {
 
       for (var i=0; i< hours.length; i++)
       {
          var avg=Math.floor(this.AvgCookieSale);
        this.nofcokies.push((getRandomCust(65,23))*avg);
        
    }
    for (var i=0; i<hours.length; i++)
       {
          this.sum=this.sum+this.nofcokies[i];

       }
},
  render: function () {
 var container = document.getElementById('Cookies');
var articleE1 = document.createElement('article');
 container.appendChild(articleE1);
 var h2E1 = document.createElement('h2');
articleE1.appendChild(h2E1);
 h2E1.textContent = this.Location;
 var ulE1 = document.createElement('ul');
articleE1.appendChild(ulE1);
for(var i =0; i<hours.length ; i++) {
 var liE1 = document.createElement('li');
 ulE1.appendChild(liE1);

liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;


 }
 liE1.textContent=` Total: :${this.sum} cookies.`;
 }
 }
 console.log("number of cookies",Seattle.nofcokies);
Seattle.custperhour();
Seattle.render();
console.log(Seattle);





var Tokyo={
Location : 'Tokyo',
MinCust :  3,
MaxCust : 24,
AvgCookieSale : 1.2,

nofcokies:[],
sum:0,
custperhour: function() {
 
       for (var i=0; i<hours.length; i++)
       {
          var avg=Math.floor(this.AvgCookieSale);
        this.nofcokies.push((getRandomCust(24,3))*avg);
        
    }
    for (var i=0; i<hours.length; i++)
       {
          this.sum=this.sum+this.nofcokies[i];

       }
},
  render: function () {
 var container = document.getElementById('Cookies');
var articleE1 = document.createElement('article');
 container.appendChild(articleE1);
 var h2E1 = document.createElement('h2');
articleE1.appendChild(h2E1);
 h2E1.textContent = this.Location;
 var ulE1 = document.createElement('ul');
articleE1.appendChild(ulE1);
for(var i =0; i<hours.length ; i++) {
 var liE1 = document.createElement('li');
 ulE1.appendChild(liE1);

liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
 }
 liE1.textContent=` Total: :${this.sum} cookies.`;
 }
 }
 console.log("number of cookies",Tokyo.nofcokies);
Tokyo.custperhour();
Tokyo.render();
console.log(Tokyo);






var Dubai={
Location : 'Dubai',
MinCust :  11,
MaxCust : 38,
AvgCookieSale : 3.7,

nofcokies:[],
sum:0,
custperhour: function() {
 
       for (var i=0; i<hours.length; i++)
       {
          var avg=Math.floor(this.AvgCookieSale);
        this.nofcokies.push((getRandomCust(38,11))*avg);
        
    }
    for (var i=0; i<hours.length; i++)
       {
          this.sum=this.sum+this.nofcokies[i];

       }
},
  render: function () {
 var container = document.getElementById('Cookies');
var articleE1 = document.createElement('article');
 container.appendChild(articleE1);
 var h2E1 = document.createElement('h2');
articleE1.appendChild(h2E1);
 h2E1.textContent = this.Location;
 var ulE1 = document.createElement('ul');
articleE1.appendChild(ulE1);
for(var i =0; i<hours.length ; i++) {
 var liE1 = document.createElement('li');
 ulE1.appendChild(liE1);

liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
 }
 liE1.textContent=` Total: :${this.sum} cookies`;
 }
 }
 console.log("number of cookies",Dubai.nofcokies);
 Dubai.custperhour();
Dubai.render();
console.log(Dubai);
  



var Paris={
Location : 'Paris',
 MinCust : 20 ,
 MaxCust : 38,
AvgCookieSale : 2.3,

nofcokies:[],
sum:0,
custperhour: function() {
 
       for (var i=0; i<hours.length; i++)
       {
          var avg=Math.floor(this.AvgCookieSale);
        this.nofcokies.push((getRandomCust(38,20))*avg);
        
    }
    for (var i=0; i<hours.length; i++)
       {
          this.sum=this.sum+this.nofcokies[i];

       }
},
  render: function () {
 var container = document.getElementById('Cookies');
var articleE1 = document.createElement('article');
 container.appendChild(articleE1);
 var h2E1 = document.createElement('h2');
articleE1.appendChild(h2E1);
 h2E1.textContent = this.Location;
 var ulE1 = document.createElement('ul');
articleE1.appendChild(ulE1);
for(var i =0; i<hours.length ; i++) {
 var liE1 = document.createElement('li');
 ulE1.appendChild(liE1);

liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
 }
 liE1.textContent=` Total: :${this.sum} cookies.`;
 }
 }
 console.log("number of cookies",Paris.nofcokies);
Paris.custperhour();
Paris.render();
console.log(Paris);

    



var Lima={
Location : 'Lima',
MinCust :  2 ,
MaxCust :16 ,
AvgCookieSale : 4.6,

nofcokies:[],
imagePath: 'salmon.png',
sum:0,
custperhour: function() {
 
       for (var i=0; i<hours.length; i++)
       {
          var avg=Math.floor(this.AvgCookieSale);
        this.nofcokies.push((getRandomCust(16,2))*avg);
        
    }
    for (var i=0; i<hours.length; i++)
       {
          this.sum=this.sum+this.nofcokies[i];

       }
},
  render: function () {
 var container = document.getElementById('Cookies');
var articleE1 = document.createElement('article');
 container.appendChild(articleE1);
 var h2E1 = document.createElement('h2');
articleE1.appendChild(h2E1);
 h2E1.textContent = this.Location;
 var ulE1 = document.createElement('ul');
articleE1.appendChild(ulE1);
for(var i =0; i<hours.length ; i++) {
 var liE1 = document.createElement('li');
 ulE1.appendChild(liE1);

liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
}
 liE1.textContent=` Total: :${this.sum} cookies.`;

 
      //    var imgE1 = document.createElement('img');
      //   imgE1.setAttribute('src',this.imagePath);
      //   articleE1.appendChild(imgE1);

      //     console.log(container);
 }
 }
 console.log("number of cookies",Lima.nofcokies);
Lima.custperhour();
Lima.render();
console.log(Lima);




