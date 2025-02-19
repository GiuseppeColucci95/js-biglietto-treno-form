//get node of the page and save it in a variable
const distanceEl = document.getElementById('distance');
console.log(distanceEl);

const ageEl = document.getElementById('age');
console.log(ageEl);

const submitEl = document.querySelector('button');
console.log(submitEl);

//add event listener to the submit button
submitEl.addEventListener('click', function () {

  //get the number of km to do and save it in a variable
  const km = distanceEl.value;
  console.log("Km: " + km);

  //get the passenger age and save it in a variable
  const age = ageEl.value;
  console.log("Age: " + age);

  //calculate the ticket price and save it in a variable
  const priceForKm = 0.21;
  const minorDiscount = 0.20;
  const seniorDiscount = 0.40;
  let totalPrice = priceForKm * km;
  console.log("Price not discounted: " + totalPrice.toFixed(2));

  //calculate optional discount if minors of 18 years old
  if (age < 18) {
    totalPrice -= totalPrice * minorDiscount;
  } else if (age >= 65) {
    //calculate optional discount if over 65 years old
    totalPrice -= totalPrice * seniorDiscount;
  }

  console.log("Final price: " + totalPrice.toFixed(2));


});

