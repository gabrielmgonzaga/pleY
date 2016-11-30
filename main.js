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
]

  // **************** HELPER FUNCTIONS **************** //
// 1. Removes targeted elements.
// 2. Search function that matches business name with user input.
// 3. Helper function to create class named elements.
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

  let $formContainer = newClassName('div', 'review-form')

  let $label = newClassName('span', 'review-label')
  $label.textContent = 'Your Review'

  let $form = newClassName('form', 'review-form')
  let $text = newClassName('textarea', 'text-area')
  let $button = newClassName('button', 'post-button')
  $button.setAttribute('type', 'submit')
  $button.textContent = 'Post Review'
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
let $businesses = document.getElementById('businesses')
let $business = document.getElementById('business')
let $review = document.getElementById('review')
let $term = $form.querySelector('input')

// 1. UI View for user search.
// 2. UI View for single business.
// 3. UI View for review form.
let showSearch = function(event) {
  event.preventDefault()

  empty($businesses)

  let userSearchValue = $term.value
  if (!userSearchValue.trim()) return

  let matchingBusinesses = userSearch(companies, userSearchValue)

  // Conditional to fire `No Results Found Message`.
  if (matchingBusinesses.length === 0) {
    let $noResults = newClassName('h3', 'results')
      $noResults.textContent = 'No Results for ' + userSearchValue
      $businesses.appendChild($noResults)
  }
  else {
    // Loop through matching business and render the business on the page.
    matchingBusinesses.forEach((object) => {
      let $item = renderBusinesses(object)
      $businesses.appendChild($item)

      // CSS to show.
      $businesses.style.visibility = 'visible'
      $businesses.style.position = 'relative'

      // CSS to hide.
      $business.style.visibility = 'hidden'
      $business.style.position = 'relative'
      $review.style.visibility = 'hidden'
    })
  }

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

  // **************** END **************** //

  // **************** EVENT LISTENERS **************** //
// 1. Event listener that displays users' search.
// 2. Event listener that displays business landing page.
// 3. Event listener that shows the review form.
$form.addEventListener('submit', showSearch)

$businesses.addEventListener('click', showBusiness)

$business.addEventListener('click', showReviewForm)

  // **************** END ****************//
