//get node of the page and save it in a variable
const userNameEl = document.getElementById('userName');
console.log(userNameEl);

const distanceEl = document.getElementById('distance');
console.log(distanceEl);

const ageEl = document.getElementById('age');
console.log(ageEl);

const formEl = document.getElementById('userForm');
console.log(formEl);

//get the nodes from the second container
const userNameTicket = document.querySelector('.nameSet');
console.log(userNameTicket);

const offerTicket = document.getElementById('offerSet');
console.log(offerTicket);

const priceTicket = document.getElementById('priceSet');
console.log(priceTicket);


//add event listener to the submit button
formEl.addEventListener('submit', function (e) {

  //prevent default refresh of the page
  e.preventDefault();

  //get the number of km to do and save it in a variable
  const km = distanceEl.value;
  console.log("Km: " + km);

  //get the passenger age and save it in a variable
  const age = ageEl.value;
  console.log("Age: " + age);

  //get the passenger name and save it in a variable
  const name = userNameEl.value;
  console.log("Name: " + name);

  let offer = "";

  //calculate the ticket price and save it in a variable
  const priceForKm = 0.21;
  const minorDiscount = 0.20;
  const seniorDiscount = 0.40;
  let totalPrice = priceForKm * km;
  console.log("Price not discounted: " + totalPrice.toFixed(2));

  //calculate optional discount if minors of 18 years old
  if (age === "Under 18") {
    totalPrice -= totalPrice * minorDiscount;
    offer = "Under 18";
  } else if (age === "Over 65") {
    //calculate optional discount if over 65 years old
    totalPrice -= totalPrice * seniorDiscount;
    offer = "Over 65";
  } else {
    offer = "Standard Price";
  }

  //set the values in the ticket
  userNameTicket.innerHTML = name;
  offerTicket.innerHTML = offer;
  priceTicket.innerHTML = totalPrice.toFixed(2) + "€";

  console.log("Final price: " + totalPrice.toFixed(2));
});

