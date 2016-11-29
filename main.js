let companies = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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

<<<<<<< HEAD
  // **************** HELPER FUNCTIONS ****************//
// Removes targeted elements.
=======
// The DOM_ sign preceding a variable name is a naming convention that represents a DOM element.
// DOM_form represents the user search form.
// DOM_businesses represents the users search results that will be displayed on the page.
// DOM_term represents the users search value.
let DOM_form = document.getElementById('form-search');
let DOM_businesses = document.getElementById('businesses');
let DOM_term = DOM_form.querySelector('input');

// Event listener that listens for users' input value and renders matching values on the DOM.
DOM_form.addEventListener('submit', (event) => {

  event.preventDefault();

  empty(DOM_businesses);

  let userSearchValue = DOM_term.value;

  if (!userSearchValue.trim()) return;

  let matchingBusinesses = userSearch(companies, userSearchValue);

  // Loop that matches businesses and renders the business on the page.
  matchingBusinesses.forEach((item) => {
    let DOM_item = renderBusiness(item);
    DOM_businesses.appendChild(DOM_item);
  });

  DOM_term.select();
});

// Helper function that removes all children from a selected HTML element.
>>>>>>> issue-1
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

<<<<<<< HEAD
// Search function that matches business name with user input.
function userSearch(allItems, userText) {
=======
// Helper function that matches the business' name with text the user inputs in the search bar.
function userSearch(allItems, userText) {

>>>>>>> issue-1
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
  // **************** END HELPER ****************//

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
    $name.setAttribute('data-id', item.id);
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
function renderSingleBusiness(item) {

  // <div class="business-header">
  //   <h1 class="business-header-name">{ Business name }</h1>
  //   <div class="business-header-images">
  //     <img /> { Business Images }
  //   </div>
  // </div>
  // <div class="business-main-reviews">
  //   <img /> { User Images }
  //   <span>{ User Name }</span>
  //   <span>{ User Reviews }</span>
  // </div>

  let $item = newClassName('div', 'business-header');
  let $name = newClassName('h1', 'business-header-name');
    $name.textContent = item.name;
  let $imageDiv = newClassName('div', 'business-header-images');

    let $businessImages = newClassName('img');
    $businessImages.setAttribute('src', item.img);
    // Goes in $businessImages
    $imageDiv.appendChild($businessImages);
  let $reviews = newClassName('div', 'business-main-reviews')

    let $userImage = newClassName('img');
    $userImage.setAttribute('src', item.reviews.img);
    $reviews.appendChild($userImage);

    let $userName = newClassName('span');
    $userName.textContent = item.reviews.name;
    $reviews.appendChild($userName);

    let $userReviews = newClassName();
    $userReviews.textContent = item.reviews.review;
    $reviews.appendChild($userReviews);

  $item.appendChild($name);
  $item.appendChild($imageDiv);
  $item.appendChild($reviews);

  return $item;
}
  // **************** END RENDER ****************//

  // **************** EVENT LISTENERS ****************//
// The $ sign preceding a variable name is a naming convention that represents a DOM element.
let $form = document.getElementById('form-search');
let $businesses = document.getElementById('businesses');
<<<<<<< HEAD
let $business = document.getElementById('business');
=======
>>>>>>> issue-5
let $term = $form.querySelector('input');

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
    matchingBusinesses.forEach((object) => {
      let $item = renderBusiness(object);
      $businesses.appendChild($item);

      // Sets the business list search css from hidden to visible
      let $css = document.getElementById('businesses');
      $css.style.visibility = 'visible';
      $css.style.position = 'relative';
    });
  }

  $term.select();
});
<<<<<<< HEAD

$businesses.addEventListener('click', (event) => {

  if (event.target.classList.value === 'business-name') {
    companies.forEach((object) => {
      if (event.target.getAttribute('data-id') == object.id) {
        let $singleBusiness = renderSingleBusiness(object);
        $business.appendChild($singleBusiness);

        // Sets the businesss list search css from visible to hidden
        let $css = document.getElementById('businesses');
        $css.style.visibility = 'hidden';
        $css.style.position = 'absolute';
      }
    });
  }

});
  // **************** END EVENT LISTENERS ****************//
=======
  // **************** EVENT LISTENERS ****************//
>>>>>>> issue-5
