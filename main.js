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
    address: "100 Barranca Irvine, CA 92606",
    reviews: {
      img: "http://placehold.it/140x100",
      name: "perspiciatis unde",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  }
]

  // **************** HELPER FUNCTIONS **************** //
// 1. Removes targeted elements.
// 2. Search function that matches business name with user input.
// 3. Search function that searches user location.
// 4. Helper function to create class named elements.
function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

function userSearch(allItems, userText) {
  let matchingBusinesses = allItems.filter((item) => {
    let businessText = item.name
    let match = businessText.toLowerCase().indexOf(userText.toLowerCase()) > -1
    return match
  })

  return matchingBusinesses
}

function locationSearch(allItems, city) {
  let matchingCities = allItems.filter((item) => {
    let location = item.address
    let match = location.toLowerCase().indexOf(city.toLowerCase()) > -1
    return match
  })

  return matchingCities
}

function newClassName(element, className) {
  let name = document.createElement(element)

  if (!className) return name
  name.classList.add(className)

  return name
}
  // **************** END **************** //

  // **************** DOM_Creation FUNCTIONS **************** //
// 1. Render function which displays businesses on the DOM.
// 2. Render function that displays a business that is clicked by the user.
// 3. Render function that builds the user review DOM.
function renderBusinesses(item) {

  // <div class="business">
  //   <div class="business-thumbnail"><img src="{imageUrl}" />
  //     <span class="business-name"></span>
  //     <span class="business-address"></span>
  //     <span class="business-review"></span>
  //   </div>
  // </div>

  let $item = newClassName('div', 'business')

  let $thumbnail = newClassName('div', 'business-image')

  let $image = newClassName('img')
  $image.setAttribute('src', item.img)
  $thumbnail.appendChild($image)

  let $name = newClassName('a', 'business-name')
  $name.setAttribute('href', '#')
  $name.setAttribute('data-id', item.id)
  $name.textContent = item.name

  let $address = newClassName('span', 'business-address')
  $address.textContent = item.address

  let $review = newClassName('span', 'business-review')
  $review.textContent = item.reviews.review

  $item.appendChild($thumbnail)
  $item.appendChild($name)
  $item.appendChild($address)
  $item.appendChild($review)

  return $item
}

function renderSingleBusiness(item) {

  // <div class="business-main">
  //   <div class="business-header">
  //     <h1 class="business-header-name">{ Business name }</h1>
  //     <a class=""><button> { Write a Review } </button></a>
  //     <img /> { Business Images }
  //   </div>
  //   <div class="business-main-reviews">
  //     <img /> { User Images }
  //     <span>{ User Name }</span>
  //     <div>{ User Reviews }</div>
  //   </div>
  // </div>

  let $main = newClassName('div', 'business-main')

  let $item = newClassName('div', 'business-header')
  let $name = newClassName('h1', 'business-header-name')
  $name.textContent = item.name

  let $button = newClassName('a', 'review-button')
  $button.setAttribute('href', '#')
  $button.setAttribute('data-id', item.id)
  $button.textContent = 'Write a Review'

  let $businessImages = newClassName('img')
  $businessImages.setAttribute('src', item.img)
  $businessImages.setAttribute('id', 'map')

  let $reviews = newClassName('div', 'business-main-reviews')

  let $userImage = newClassName('img')
  $userImage.setAttribute('src', item.reviews.img)
  $userImage.setAttribute('id', 'smallImage')

  let $userName = newClassName('a')
  $userName.setAttribute('href', '#')
  $userName.setAttribute('id', 'userName')
  $userName.textContent = item.reviews.name

  let $userReviews = newClassName('div')
  $userReviews.setAttribute('id', 'userReviews')
  $userReviews.textContent = item.reviews.review

  $item.appendChild($name)
  $item.appendChild($button)
  $item.appendChild($businessImages)
  $reviews.appendChild($userImage)
  $reviews.appendChild($userName)
  $reviews.appendChild($userReviews)
  $main.appendChild($item)
  $main.appendChild($reviews)

  return $main
}

function renderReviewForm(item) {

  // <div class="review-container">
  //   <h3 class="review-message"> { Write a Review }</h3>
  //   <img />
  //   <span class="review-name"> { Business Name }</span>
  //   <span class="review-address"> { Business Address } </span>
  //
  //   <div class="review-form">
  //     <span class="review-label"> { Your Review } </span>
  //     <form class="review-form">
  //       <input type="text" id="nameInput">
  //       <textarea type="submit" class="text-area"></textarea>
  //       <button> { Post Review } </button>
  //     </form>
  //   </div>
  // </div>

  let $main = newClassName('div', 'review-container')

  let $message = newClassName('span', 'review-message')
  $message.textContent = 'Write a Review'

  let $img = newClassName('img')
  $img.setAttribute('src', item.reviews.img)
  $img.setAttribute('id','reviewImage')

  let $name = newClassName('a', 'review-name')
  $name.setAttribute('href', '#')
  $name.textContent = item.name

  let $address = newClassName('span', 'review-address')
  $address.textContent = item.address

  let $formContainer = newClassName('div')

  let $label = newClassName('span', 'review-label')
  $label.textContent = 'Your Review'

  let $form = newClassName('form')
  $form.setAttribute('id', 'reviewForm')

  let $input = newClassName('input')
  $input.setAttribute('type', 'text')
  $input.setAttribute('id', 'nameInput')
  $input.setAttribute('placeholder', 'Name: required')

  let $text = newClassName('textarea', 'text-area')
  $text.setAttribute('placeholder', 'Review: "I love this place"')
  let $button = newClassName('button', 'post-button')
  $button.setAttribute('type', 'submit')
  $button.textContent = 'Post Review'

  $form.appendChild($input)
  $form.appendChild($text)
  $form.appendChild($button)

  $formContainer.appendChild($label)
  $formContainer.appendChild($form)

  $main.appendChild($message)
  $main.appendChild($img)
  $main.appendChild($name)
  $main.appendChild($address)
  $main.appendChild($formContainer)

  return $main
}
  // **************** END **************** //

  // **************** EVENT LISTENER FUNCTIONS **************** //
// The $ sign preceding a variable name is a naming convention that represents a DOM element.
let $form = document.getElementById('form-search')
let $term = $form.elements[0]
let $locationTerm = $form.elements[1]

let $businesses = document.getElementById('businesses')
let $business = document.getElementById('business')
let $review = document.getElementById('review')

// 1. UI View for user search.
// 2. UI View for single business.
// 3. UI View for review form.
// 4. UI View to submit new review.
// 5. UI View to toggle between Review Form and Single Business.
let showSearch = function(event) {
  event.preventDefault()

  empty($businesses)

  let userSearchValue = $term.value
  let locationValue = $locationTerm.value

  let matchingBusinesses = userSearch(companies, userSearchValue)
  let matchingCities = locationSearch(companies, locationValue)

  if (!locationValue.trim() && !userSearchValue.trim()) {
    let $noResults = newClassName('h3', 'results')
      $noResults.textContent = 'Hmm, something\'s missing?'
      $businesses.appendChild($noResults)
      return
  }

  switch (true) {
    case matchingBusinesses.length === 0:
      var $noResults = newClassName('h3', 'results')
        $noResults.textContent = 'No Results for ' + userSearchValue
        $businesses.appendChild($noResults)
      break;
    case matchingCities.length === 0:
      var $sorry = newClassName('h3', 'results')
        $sorry.textContent = 'Sorry, but we didn\'t understand the location you entered.'
        $businesses.appendChild($sorry)
      break;
    case matchingBusinesses.length !== 0:
      matchingBusinesses.forEach((item) => {
        let $item = renderBusinesses(item)
        $businesses.appendChild($item)
      })
      break;
    case matchingCities.length !== 0:
      matchingCities.forEach((item) => {
        let $item = renderBusinesses(item)
        $businesses.appendChild($item)
      })
  }

  // CSS to show.
  $businesses.style.visibility = 'visible'
  $businesses.style.position = 'relative'

  // CSS to hide.
  $business.style.visibility = 'hidden'
  $business.style.position = 'relative'
  $review.style.visibility = 'hidden'

  $term.select()
}

let showBusiness = function(event) {
  empty($business)

  if (event.target.classList.value === 'business-name') {
    companies.forEach((object) => {
      if (event.target.getAttribute('data-id') == object.id) {
        let $singleBusiness = renderSingleBusiness(object)
        $business.appendChild($singleBusiness)

        // CSS to show.
        $business.style.visibility = 'visible'

        // CSS to hide.
        $businesses.style.visibility = 'hidden'
        $businesses.style.position = 'absolute'
      }
    })
  }
}

let showReviewForm = function(event) {
  empty($review)

  if (event.target.classList.value === 'review-button') {
    companies.forEach((object) => {
      if (event.target.getAttribute('data-id') == object.id) {
        let $form = renderReviewForm(object)
        $review.appendChild($form)

        // CSS set to show.
        $review.style.visibility = 'visible'

        // CSS to hide.
        $business.style.visibility = 'hidden'
        $business.style.position = 'absolute'
      }
    })
  }
}

let postNewReview = function(event) {
  event.preventDefault()

  let $form = document.getElementById('reviewForm')

  let $nameTerm = $form.querySelector('input')
  let name = $nameTerm.value
  if (!name) return

  let $textTerm = $form.querySelector('textarea')
  let review = $textTerm.value

  let $reviews = newClassName('div', 'business-main-reviews')

  let $userName = newClassName('a')
  $userName.setAttribute('href', '#')
  $userName.setAttribute('id', 'userName')
  $userName.textContent = name

  let $userImage = newClassName('img')
  $userImage.setAttribute('src', 'http://placehold.it/140x100')
  $userImage.setAttribute('id', 'smallImage')

  let $userReview = newClassName('div')
  $userReview.setAttribute('id', 'userReviews')
  $userReview.textContent = review

  $reviews.appendChild($userImage)
  $reviews.appendChild($userName)
  $reviews.appendChild($userReview)
  $business.appendChild($reviews)

  // CSS to show
  $business.style.visibility = 'visible'
  $business.style.position = 'relative'

  // CSS to hide
  $review.style.visibility = 'hidden'
}

let toggleSingleBusiness = function(event) {

  if (event.target.classList.value === 'review-name') {
    // CSS to show
    $business.style.visibility = 'visible'
    $business.style.position = 'relative'

    // CSS to hide
    $review.style.visibility = 'hidden'
  }
}

  // **************** END **************** //

  // **************** EVENT LISTENERS **************** //
// 1. Event listener that displays users' search.
// 2. Event listener that displays business landing page.
// 3. Event listener that shows the review form.
// 4. Event listener that captures users' review input.
// 5. Event listener that toggles between review form and it's associating business.
$form.addEventListener('submit', showSearch)

$businesses.addEventListener('click', showBusiness)

$business.addEventListener('click', showReviewForm)

$review.addEventListener('submit', postNewReview)

$review.addEventListener('click', toggleSingleBusiness)
  // **************** END ****************//
