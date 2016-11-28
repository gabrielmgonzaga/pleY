const companies = [
  {
    img: "http://placehold.it/140x100",
    name: "Walmart",
    address: "10000 Harbor Santa Ana, CA",
    reviews: {
      img: "http://placehold.it/140x100",
      name: "illum qui",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  },
  {
    img: "http://placehold.it/140x100",
    name: "Target",
    address: "1000 Seal Beach Blvd. Seal Beach, CA",
    reviews: {
      img: "http://placehold.it/140x100",
      name: "quasi architecto",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  },
  {
    img: "http://placehold.it/140x100",
    name: "7-11",
    address: "100 Barranca Irvine, CA",
    reviews: {
      img: "http://placehold.it/140x100",
      name: "perspiciatis unde",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  }
];

// The $ sign preceding a variable name is a naming convention that represents a DOM element.
let $form = document.getElementById('form-search');
let $businesses = document.getElementById('businesses');
let $term = $form.querySelector('input');

// let $anchorTag = document.querySelector('a');

// let show = $anchorTag.addEventListener('click', (event) => {
//   empty($businesses);
//   companies.forEach((item) => {
//   });
// });

  // **************** HELPER FUNCTIONS ****************//
// Removes targeted elements.
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Search function that matches business name with user input.
function userSearch(allItems, userText) {
  let matchingBusinesses = allItems.filter((item) => {
    let businessText = item.name;
    let match = businessText.toLowerCase().indexOf(userText.toLowerCase()) > -1;
    return match;
  });

  return matchingBusinesses;
}

// Helper function to create class named elements.
function newClassName(element, className) {
  let name = document.createElement(element);

  if (!className) return name;
  name.classList.add(className);

  return name;
}

  // **************** HELPER FUNCTIONS ****************//

  // **************** RENDER FUNCTIONS ****************//
// Render function which displays businesses on the DOM.
function renderBusiness(item) {

  // <div class="business">
  //   <div class="business-thumbnail"><img src="{imageUrl}" />
  //     <span class="business-name"></span>
  //     <span class="business-address"></span>
  //     <span class="business-review"></span>
  //   </div>
  // </div>

  let $item = newClassName('div', 'business');
  let $thumbnail = newClassName('div', 'business-image');

  let $image = newClassName('img');
  $image.setAttribute('src', item.img);
  $thumbnail.appendChild($image);

  let $name = newClassName('a', 'business-name');
  $name.setAttribute('href', '#');
  $name.textContent = item.name;

  let $address = newClassName('span', 'business-address');
  $address.textContent = item.address;

  let $review = newClassName('span', 'business-review');
  $review.textContent = item.reviews.review;

  $item.appendChild($thumbnail);
  $item.appendChild($name);
  $item.appendChild($address);
  $item.appendChild($review);

  return $item;
}

// Render function that displays a business that is clicked by the user.
// function renderSingleBusiness(item) {
//
//   // <div class="business-header">
//   //   <h1 class="business-header-name">{ Business name }</h1>
//   //   <div class="business-header-images">
//   //     <img /> { Business Images }
//   //   </div>
//   // </div>
//   // <div class="business-main-reviews">
//   //   <img /> { User Images }
//   //   <span>{ User Name }</span>
//   //   <span>{ User Reviews }</span>
//   // </div>

  // **************** RENDER FUNCTIONS ****************//

  // **************** EVENT LISTENERS ****************//
// Event listener for user input in the search form.
$form.addEventListener('submit', (event) => {

  event.preventDefault();

  empty($businesses);

  let userSearchValue = $term.value;

  if (!userSearchValue.trim()) return;

  let matchingBusinesses = userSearch(companies, userSearchValue);

  // Conditional to fire `No Results Found Message`.
  if (matchingBusinesses.length === 0) {
    let $noResults = newClassName('h3', 'results');
    $noResults.textContent = 'No Results for ' + userSearchValue;
    $businesses.appendChild($noResults);
  }
  else {
    // Loop through matching business and render the business on the page.
    matchingBusinesses.forEach((item) => {
      let $item = renderBusiness(item);
      $businesses.appendChild($item);
    });
  }

  $term.select();
});

  // **************** EVENT LISTENERS ****************//
