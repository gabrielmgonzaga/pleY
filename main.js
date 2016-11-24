let companies = [
  { img: "http://placehold.it/140x100", name: "Walmart", address: "10000 Harbor Santa Ana, CA", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure" },
  { img: "http://placehold.it/140x100", name: "Target", address: "1000 Seal Beach Blvd. Seal Beach, CA", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure" },
  { img: "http://placehold.it/140x100", name: "7-11", address: "100 Barranca Irvine, CA", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure" }
];

// The DOM_ sign preceding a variable name is a naming convention that represents a DOM element.
// DOM_form represents the user search form.
// DOM_businesses represents the users search results that will be displayed on the page.
// DOM_term represents the users search value.
let DOM_form = document.getElementById('form-search');
let DOM_businesses = document.getElementById('businesses');
let DOM_term = DOM_form.querySelector('input');

// Listen for `submit` events on the DOM_form in the DOM.
DOM_form.addEventListener('submit', (event) => {

  // Cancels the default behavior for submit events.
  event.preventDefault();

  // Prevents user from re-submitting form.
  empty(DOM_businesses);

  // userSearchValue represents the value the user types into the input
  let userSearchValue = DOM_term.value;

  // If the input text is empty, don't allow the user to submit anything.
  if (!userSearchValue.trim()) return;

  // Result of the users search for businesses
  let matchingBusinesses = userSearch(companies, userSearchValue);

  // Loop through matching businesses and render the business on the page.
  matchingBusinesses.forEach((item) => {
    let DOM_item = renderBusiness(item);
    DOM_businesses.appendChild(DOM_item);
  });

  DOM_term.select();
});

// Empty function that removes all children from an HTML element.
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

// Search function which matches business name.
function userSearch(allItems, userText) {

  // Filter through the array of objects and return only those that pass the filter test.
  let matchingBusinesses = allItems.filter((item) => {
    let businessText = item.name;
    let match = businessText.toLowerCase().indexOf(userText.toLowerCase()) > -1;
    return match;
  });

  return matchingBusinesses;
}

// Render Function which displays businesses on the DOM.
function renderBusiness(item) {

  // <div class="business">
  //   <div class="business-thumbnail"><img src="{imageUrl}" />
  //     <span class="business-name"></span>
  //     <span class="business-address"></span>
  //     <span class="business-review"></span>
  //   </div>
  // </div>

  let DOM_item = document.createElement('div');
  DOM_item.classList.add('business');

  let DOM_thumbnail = document.createElement('div');
  DOM_thumbnail.classList.add('business-image');

  let DOM_image = document.createElement('img');
  DOM_image.setAttribute('src', item.img);

  DOM_thumbnail.appendChild(DOM_image);

  let DOM_name = document.createElement('span');
  DOM_name.textContent = item.name;
  DOM_name.classList.add('business-name');

  let DOM_address = document.createElement('span');
  DOM_address.textContent = item.address;
  DOM_address.classList.add('business-address');

  let DOM_review = document.createElement('span');
  DOM_review.textContent = item.review;
  DOM_review.classList.add('business-review');

  DOM_item.appendChild(DOM_thumbnail);
  DOM_item.appendChild(DOM_name);
  DOM_item.appendChild(DOM_address);
  DOM_item.appendChild(DOM_review);

  return DOM_item;
}
