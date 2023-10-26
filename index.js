// Initializes arrays of possible names and occupations
const possibleNames = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const possibleOccupations = [
  "writer",
  "teacher",
  "programmer",
  "designer",
  "gardener",
];

// Initializes array of freelancers
const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

/**
 * Calculates the average price of freelancers.
 * @returns {Number} - The average price.
 */
const calculateAverage = () => {
  const total = freelancers.reduce(
    (acc, freelancer) => acc + freelancer.price,
    0
  );
  return (total / freelancers.length).toFixed(2);
};

/**
 * Updates the UI with freelancer information and average price.
 */
const updateUI = () => {
  const freelancerList = document.querySelector("#freelancerList");
  const averagePrice = document.querySelector("#averagePrice");

  // Clears existing list
  freelancerList.innerHTML = "";

  // Populates the list with freelancers
  freelancers.forEach((freelancer) => {
    freelancerList.innerHTML += `<li>${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}</li>`;
  });

  // Updates the average price display
  averagePrice.innerText = `Average Starting Price: $${calculateAverage()}`;
};

/**
 * Generates a random freelancer and add to the freelancers array.
 */
const addRandomFreelancer = () => {
  const randomName =
    possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const randomOccupation =
    possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20; // Price between 20 and 120

  freelancers.push({
    name: randomName,
    price: randomPrice,
    occupation: randomOccupation,
  });
};

// Initial UI update
updateUI();

// Sets interval to add a freelancer and update UI every 5 seconds
setInterval(() => {
  addRandomFreelancer();
  updateUI();
}, 5000);
