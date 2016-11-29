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

  // **************** HELPER FUNCTIONS **************** //
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
  // **************** END HELPER ()'s' **************** //

  // **************** DOM_Creation FUNCTIONS **************** //
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
  // <div class="business-main">
  //   <div class="business-header">
  //     <h1 class="business-header-name">{ Business name }</h1>
  //     <button> <i> { * } </i> { Write a Review } </button>
  //     <img /> { Business Images }
  //   </div>
  //   <div class="business-main-reviews">
  //     <img /> { User Images }
  //     <span>{ User Name }</span>
  //     <div>{ User Reviews }</div>
  //   </div>
  // </div>

  let $main = newClassName('div', 'business-main')

  let $item = newClassName('div', 'business-header');
  let $name = newClassName('h1', 'business-header-name');
    $name.textContent = item.name;

  let $button = newClassName('button', 'review-button')
    $button.textContent = 'Write a Review';

  let $businessImages = newClassName('img');
    $businessImages.setAttribute('src', item.img);
    $businessImages.setAttribute('id', 'map');

  let $reviews = newClassName('div', 'business-main-reviews')

  let $userImage = newClassName('img');
    $userImage.setAttribute('src', item.reviews.img);
    $userImage.setAttribute('id', 'smallImage');
    $reviews.appendChild($userImage);

  let $userName = newClassName('a');
    $userName.setAttribute('href', '#');
    $userName.setAttribute('id', 'userName');
    $userName.textContent = item.reviews.name;
    $reviews.appendChild($userName);

  let $userReviews = newClassName('div');
    $userReviews.setAttribute('id', 'userReviews');
    $userReviews.textContent = item.reviews.review;
    $reviews.appendChild($userReviews);

  $item.appendChild($name);
  $item.appendChild($button);
  $item.appendChild($businessImages);
  $reviews.appendChild($userImage);
  $reviews.appendChild($userName);
  $reviews.appendChild($userReviews);
  $main.appendChild($item);
  $main.appendChild($reviews);

  return $main;
}
  // **************** END DOM_Creation ()'s' **************** //

  // **************** EVENT LISTENERS **************** //
// The $ sign preceding a variable name is a naming convention that represents a DOM element.
let $form = document.getElementById('form-search');
let $businesses = document.getElementById('businesses');
let $business = document.getElementById('business');
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

      // CSS to hide the $businesses Div after user click.
      $businesses.style.visibility = 'visible';
      $businesses.style.position = 'relative';

      // CSS to show the $business Div.
      $business.style.visibility = 'hidden';
    });
  }

  $term.select();
});

// Event Listener that fires after user clicks on Business Name.
$businesses.addEventListener('click', (event) => {

  empty($business);

  if (event.target.classList.value === 'business-name') {
    companies.forEach((object) => {
      if (event.target.getAttribute('data-id') == object.id) {
        let $singleBusiness = renderSingleBusiness(object);
        $business.appendChild($singleBusiness);

        // CSS to hide the $businesses Div after user click.
        $businesses.style.visibility = 'hidden';
        $businesses.style.position = 'absolute';

        // CSS to show the $business Div.
        $business.style.visibility = 'visible';
      }
    });
  }
});
  // **************** END EVENT LISTENERS ****************//
