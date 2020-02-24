'use stricit';
var hours = ['6am', '7am', '8am', '9am','10am','11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRandomCust(MinCust, MaxCust) {
    return Math.floor( Math.random() * (MaxCust - MinCust) + MinCust) ;
}
var city=['Seattle','Tokyo','Dubai','Paris','Lima','Totals'];
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

loc.prototype.custperhour=function(){
   for (var i=0; i< hours.length; i++)
   {
      var avg=Math.floor(this.AvgCookieSale);
    this.nofcokies.push((getRandomCust(65,23))*avg);
    console.log(avg);
}
for (var i=0; i<hours.length; i++)
   {
      this.sum=this.sum+this.nofcokies[i];
      console.log(this.sum);
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
      liE1.textContent=` Total: :${this.sum} cookies.`;


/////////////////////////////////////////////////////////////////
      
      var tableE1 = document.createElement('table');
      container.appendChild(tableE1);
         var trE0 = document.createElement('tr');
         tableE1.appendChild(trE0);
         var thE1 = document.createElement('th');
         trE0.appendChild(thE1);
         for(var i=0; i<hours.length; i++){
         var thE1 = document.createElement('th');
         trE0.appendChild(thE1);
         thE1.textContent=hours[i];
      }


      var trE1 = document.createElement('tr');
      var trE2=document.createElement('tr');
      var trE3 = document.createElement('tr');
      var trE4=document.createElement('tr');
      var trE5 = document.createElement('tr');
      
      tableE1.appendChild(trE1);
      trE1.textContent = city[0];
      tableE1.appendChild(trE2);
      trE2.textContent = city[1];
      tableE1.appendChild(trE3);
      trE3.textContent = city[2];
      tableE1.appendChild(trE4);
      trE4.textContent = city[3];
      tableE1.appendChild(trE5);
      trE5.textContent = city[4];
   
   
      for(var i=0;i<hours.length;i++){
         
         var tdE1 = document.createElement('td');  
         trE1.appendChild(tdE1);
         tdE1.textContent = this.nofcokies[i];
         
         var tdE2 = document.createElement('td');  
         trE2.appendChild(tdE2);
         tdE2.textContent = this.nofcokies[i];

         var tdE3 = document.createElement('td');  
         trE3.appendChild(tdE3);
         tdE3.textContent = this.nofcokies[i];

         var tdE4 = document.createElement('td');  
         trE4.appendChild(tdE4);
         tdE4.textContent = this.nofcokies[i];

         var tdE5 = document.createElement('td');  
         trE5.appendChild(tdE5);
         tdE5.textContent = this.nofcokies[i];
      
      }//close render porototype
     
       }// close constractor


   

   var Seattle= new loc('seattle',23,56,6.3);
   var Tokyo= new loc('Tokyo',3,24,1.2);
   var Dubai= new loc('Dubai',11,38,3.7);
   var Paris= new loc('Paris',20,38,2.3);
   var Lima= new loc('Lima',2,16,4.6);

   for (var i =0; i<Locationsof.length; i++) {
      Locationsof[i].custperhour();
      Locationsof[i].render();
   }
/////////////////////////////////////////////////////
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




