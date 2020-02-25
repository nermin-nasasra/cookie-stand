'use stricit';
var hours = ['6am', '7am', '8am', '9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var container = document.getElementById('Cookies');
var articleE1 = document.createElement('article');
container.appendChild(articleE1);
 var tableE1 = document.createElement('table');
 container.appendChild(tableE1);
 tableE1.border='2';

 var Locationsof =[];
 function loc (location,MinCust,MaxCust,AvgCookieSale){
    
    this.location=location;
    this.MinCust=MinCust;
    this.MaxCust=MaxCust;
    this.AvgCookieSale=AvgCookieSale;
    this.nofcokies=[];
    this.sum=0;
    Locationsof.push(this);
   }
   
   var avgcus = [];
   loc.prototype.getRandomCust= function (MinCust, MaxCust) {
      var avgcus1 = Math.floor( Math.random() * (this.MaxCust - this.MinCust) + this.MinCust);
      avgcus.push(avgcus1);
   }

loc.prototype.custperhour=function(){
   for (var i=0; i< hours.length; i++)
   {
      var avg=Math.floor(this.AvgCookieSale);
    this.nofcokies.push((avgcus[i]*avg));
}

for (var i=0; i<hours.length; i++)
   {
      this.sum=this.sum+this.nofcokies[i];
   }
}


loc.prototype.render=function(){

      var container = document.getElementById('Cookies');
     var articleE1 = document.createElement('article');
      container.appendChild(articleE1);
      var h2E1 = document.createElement('h2');
     articleE1.appendChild(h2E1);
      h2E1.textContent = this.location;
      var ulE1 = document.createElement('ul');
     articleE1.appendChild(ulE1);
     for(var i =0; i<hours.length ; i++) {
      var liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
     liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
     }
      liE1.textContent=` Total :${this.sum} cookies.`;

   }
/////////////////////////////////////////////////////////////////

   loc.prototype.tablerow=function()
   {
      var r1=document.createElement('tr');
      tableE1.appendChild(r1);
      var d1=document.createElement('td');
      r1.appendChild(d1);
      d1.textContent=(this.location);
      
      

      for(var i=0; i<hours.length; i++){
         d2=document.createElement('td');
         r1.appendChild(d2);
         d2.textContent=(this.nofcokies[i]);
      }

      var d3=document.createElement('td');
      r1.appendChild(d3);
      d3.textContent=(this.sum);
   }


////////////////////////////////////////////////////////////////////////////////
   var Seattle= new loc('seattle',23,56,6.3);
   for (var i = 0; i < hours.length; i++) {
     
      Seattle.getRandomCust();
      
   }
   
   Seattle.custperhour();


   var Tokyo= new loc('Tokyo',3,24,1.2);
   for (var i = 0; i < hours.length; i++) {
     
      Tokyo.getRandomCust();
   }
   Tokyo.custperhour();

   var Dubai= new loc('Dubai',11,38,3.7);
   for (var i = 0; i < hours.length; i++) {
     
      Dubai.getRandomCust();
   }
   Dubai.custperhour();

   var Paris= new loc('Paris',20,38,2.3);
   for (var i = 0; i < hours.length; i++) {
     
      Paris.getRandomCust();
   }
   Paris.custperhour();

   var Lima= new loc('Lima',2,16,4.6);
   for (var i = 0; i < hours.length; i++) {
     
      Lima.getRandomCust();
   }
   Lima.custperhour();


/////////////////////////////////////////////////////////////////////////////


   function tableHead(){
      var trE0 = document.createElement('tr');
      tableE1.appendChild(trE0);
      var thE1 = document.createElement('th');
      trE0.appendChild(thE1);
      for(var i=0; i<hours.length; i++){
      var thE1 = document.createElement('th');
      trE0.appendChild(thE1);
      thE1.textContent=hours[i];
         }
         var thE2 = document.createElement('th');
         trE0.appendChild(thE2);
         thE2.textContent='total';

   }
   

  
   tableHead();
   Seattle.tablerow();
   Tokyo.tablerow();
   Dubai.tablerow();
   Paris.tablerow();
   Lima.tablerow();
   
   var r2=document.createElement('tr');
   tableE1.appendChild(r2);
   var d4=document.createElement('td');
   r2.appendChild(d4);
   d4.textContent='total';
   
   function footer(){
      var maxTotals=0
      for (var i=0;i<hours.length;i++){
         var sumOfTotal=0;
         
         for(var j=0;j<Locationsof.length;j++){
            
            sumOfTotal+=Locationsof[j].nofcokies[i];
         }
         maxTotals+=sumOfTotal;
         var d5=document.createElement('td');
         r2.appendChild(d5);
         d5.textContent=sumOfTotal;
      }
      var d6=document.createElement('td');
      r2.appendChild(d6);
      d6.textContent=maxTotals;
   }
   footer();
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// var Seattle={
// Location : 'Seattle',
// MinCust :  23,
// MaxCust :65,
// AvgCookieSale :6.3,

// nofcokies:[],
// sum:0,
// custperhour: function() {
 
//        for (var i=0; i< hours.length; i++)
//        {
//           var avg=Math.floor(this.AvgCookieSale);
//         this.nofcokies.push((getRandomCust(65,23))*avg);
        
//     }
//     for (var i=0; i<hours.length; i++)
//        {
//           this.sum=this.sum+this.nofcokies[i];

//        }
// },
//   render: function () {
//  var container = document.getElementById('Cookies');
// var articleE1 = document.createElement('article');
//  container.appendChild(articleE1);
//  var h2E1 = document.createElement('h2');
// articleE1.appendChild(h2E1);
//  h2E1.textContent = this.Location;
//  var ulE1 = document.createElement('ul');
// articleE1.appendChild(ulE1);
// for(var i =0; i<hours.length ; i++) {
//  var liE1 = document.createElement('li');
//  ulE1.appendChild(liE1);

// liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;


//  }
//  liE1.textContent=` Total: :${this.sum} cookies.`;
//  }
//  }
//  console.log("number of cookies",Seattle.nofcokies);
// Seattle.custperhour();
// Seattle.render();
// console.log(Seattle);




// ////////////////////////////////////////////////////////////////

// var Tokyo={
// Location : 'Tokyo',
// MinCust :  3,
// MaxCust : 24,
// AvgCookieSale : 1.2,

// nofcokies:[],
// sum:0,
// custperhour: function() {
 
//        for (var i=0; i<hours.length; i++)
//        {
//           var avg=Math.floor(this.AvgCookieSale);
//         this.nofcokies.push((getRandomCust(24,3))*avg);
        
//     }
//     for (var i=0; i<hours.length; i++)
//        {
//           this.sum=this.sum+this.nofcokies[i];

//        }
// },
//   render: function () {
//  var container = document.getElementById('Cookies');
// var articleE1 = document.createElement('article');
//  container.appendChild(articleE1);
//  var h2E1 = document.createElement('h2');
// articleE1.appendChild(h2E1);
//  h2E1.textContent = this.Location;
//  var ulE1 = document.createElement('ul');
// articleE1.appendChild(ulE1);
// for(var i =0; i<hours.length ; i++) {
//  var liE1 = document.createElement('li');
//  ulE1.appendChild(liE1);

// liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
//  }
//  liE1.textContent=` Total: :${this.sum} cookies.`;
//  }
//  }
//  console.log("number of cookies",Tokyo.nofcokies);
// Tokyo.custperhour();
// Tokyo.render();
// console.log(Tokyo);



////////////////////////////////////////////////////////


// var Dubai={
// Location : 'Dubai',
// MinCust :  11,
// MaxCust : 38,
// AvgCookieSale : 3.7,

// nofcokies:[],
// sum:0,
// custperhour: function() {
 
//        for (var i=0; i<hours.length; i++)
//        {
//           var avg=Math.floor(this.AvgCookieSale);
//         this.nofcokies.push((getRandomCust(38,11))*avg);
        
//     }
//     for (var i=0; i<hours.length; i++)
//        {
//           this.sum=this.sum+this.nofcokies[i];

//        }
// },
//   render: function () {
//  var container = document.getElementById('Cookies');
// var articleE1 = document.createElement('article');
//  container.appendChild(articleE1);
//  var h2E1 = document.createElement('h2');
// articleE1.appendChild(h2E1);
//  h2E1.textContent = this.Location;
//  var ulE1 = document.createElement('ul');
// articleE1.appendChild(ulE1);
// for(var i =0; i<hours.length ; i++) {
//  var liE1 = document.createElement('li');
//  ulE1.appendChild(liE1);

// liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
//  }
//  liE1.textContent=` Total: :${this.sum} cookies`;
//  }
//  }
//  console.log("number of cookies",Dubai.nofcokies);
//  Dubai.custperhour();
// Dubai.render();
// console.log(Dubai);
  

///////////////////////////////////////////////////////////////

// var Paris={
// Location : 'Paris',
//  MinCust : 20 ,
//  MaxCust : 38,
// AvgCookieSale : 2.3,

// nofcokies:[],
// sum:0,
// custperhour: function() {
 
//        for (var i=0; i<hours.length; i++)
//        {
//           var avg=Math.floor(this.AvgCookieSale);
//         this.nofcokies.push((getRandomCust(38,20))*avg);
        
//     }
//     for (var i=0; i<hours.length; i++)
//        {
//           this.sum=this.sum+this.nofcokies[i];

//        }
// },
//   render: function () {
//  var container = document.getElementById('Cookies');
// var articleE1 = document.createElement('article');
//  container.appendChild(articleE1);
//  var h2E1 = document.createElement('h2');
// articleE1.appendChild(h2E1);
//  h2E1.textContent = this.Location;
//  var ulE1 = document.createElement('ul');
// articleE1.appendChild(ulE1);
// for(var i =0; i<hours.length ; i++) {
//  var liE1 = document.createElement('li');
//  ulE1.appendChild(liE1);

// liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
//  }
//  liE1.textContent=` Total: :${this.sum} cookies.`;
//  }
//  }
//  console.log("number of cookies",Paris.nofcokies);
// Paris.custperhour();
// Paris.render();
// console.log(Paris);

    

///////////////////////////////////////////////////////////////

// var Lima={
// Location : 'Lima',
// MinCust :  2 ,
// MaxCust :16 ,
// AvgCookieSale : 4.6,

// nofcokies:[],
// imagePath: 'salmon.png',
// sum:0,
// custperhour: function() {
 
//        for (var i=0; i<hours.length; i++)
//        {
//           var avg=Math.floor(this.AvgCookieSale);
//         this.nofcokies.push((getRandomCust(16,2))*avg);
        
//     }
//     for (var i=0; i<hours.length; i++)
//        {
//           this.sum=this.sum+this.nofcokies[i];

//        }
// },
//   render: function () {
//  var container = document.getElementById('Cookies');
// var articleE1 = document.createElement('article');
//  container.appendChild(articleE1);
//  var h2E1 = document.createElement('h2');
// articleE1.appendChild(h2E1);
//  h2E1.textContent = this.Location;
//  var ulE1 = document.createElement('ul');
// articleE1.appendChild(ulE1);
// for(var i =0; i<hours.length ; i++) {
//  var liE1 = document.createElement('li');
//  ulE1.appendChild(liE1);

// liE1.textContent =`${hours[i]} :${this.nofcokies[i]}cookies.`;
// }
//  liE1.textContent=` Total: :${this.sum} cookies.`;
//  }
//  }
//  console.log("number of cookies",Lima.nofcokies);
// Lima.custperhour();
// Lima.render();
// console.log(Lima);




