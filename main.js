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
// 5 - 6. CSS to toggle between show/hide.
// 7 - 8. CSS to toggle between absolute/relative.
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
    let location = item.address + item.name
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

function hide(id) {
  let a = id
  return a.style.visibility = 'hidden'
}

function show(id) {
  let a = id
  return a.style.visibility = 'visible'
}

function absolute(id) {
  let a = id
  return a.style.position = 'absolute'
}

function relative(id) {
  let a = id
  return a.style.position = 'relative'
}
  // **************** END **************** //

  // **************** DOM_Creation FUNCTIONS **************** //
// 1. Function which displays businesses on the DOM.
// 2. Function that displays a business that is clicked by the user.
// 3. Function that builds the user review DOM.
// 4. Function that builds the Sign Up Form.
// 5. Function that builds Users' Profile.
function buildBusinessList(item) {

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

function buildSingleBusiness(item) {

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

function buildReviewForm(item) {

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

function buildSignUpForm() {

  // <div class="signup-main">
  //   <div class=signup-left>
  //     <span class="signup-main-message"> { Sign Up For Yelp }</div>
  //     <span class="signup-second-message">{ Connect with great local businesses }</span>
  //     <form id-"signup-form">
  //       <input id="signup-firstname" type="text" />
  //       <input id="signup-lastname" type="text" />
  //       <input id="signup-email" type="text" />
  //       <input id="signup-password" type="text" />
  //       <input id="signup-zip" type="text" />
  //       <button id="signup-button" type="submit">{ Sign Up }</button>
  //     </form>
  //   </div>
  //   <div class="signup-right">
  //     <img id="signup-image"/>
  //   </div>
  // </div>

  let $Main = newClassName('div', 'signup-main')

  let $Left = newClassName('div', 'signup-left')

  let $message1 = newClassName('span', 'signup-heading')
  $message1.textContent = 'Sign Up For Yelp'
  $Left.appendChild($message1)

  let $message2 = newClassName('span', 'signup-subheading')
  $message2.textContent = 'Connect with great local businesses'
  $Left.appendChild($message2)

  let $Form = newClassName('form')
  $Form.setAttribute('id', 'signup-form')

  let $firstname = newClassName('input', 'signup-input')
  $firstname.setAttribute('type', 'text')
  $firstname.setAttribute('id', 'signup-firstname')
  $firstname.setAttribute('placeholder', 'First Name')
  $Form.appendChild($firstname)

  let $lastname = newClassName('input', 'signup-input')
  $lastname.setAttribute('type', 'text')
  $lastname.setAttribute('id', 'signup-lastname')
  $lastname.setAttribute('placeholder', 'Last Name')
  $Form.appendChild($lastname)

  let $email = newClassName('input', 'signup-input')
  $email.setAttribute('type', 'text')
  $email.setAttribute('id', 'signup-email')
  $email.setAttribute('placeholder', 'Email')
  $Form.appendChild($email)

  let $password = newClassName('input', 'signup-input')
  $password.setAttribute('type', 'password')
  $password.setAttribute('id', 'signup-password')
  $password.setAttribute('placeholder', 'Password')
  $Form.appendChild($password)

  let $zip = newClassName('input', 'signup-input')
  $zip.setAttribute('type', 'text')
  $zip.setAttribute('id', 'signup-zip')
  $zip.setAttribute('placeholder', 'zip')
  $Form.appendChild($zip)

  let $button = newClassName('button', 'signup-input')
  $button.setAttribute('id', 'signup-button')
  $button.setAttribute('type', 'submit')
  $button.textContent = 'Sign Up'
  $Form.appendChild($button)

  $Left.appendChild($Form)

  let $Right = newClassName('div', 'signup-right')

  let $image = newClassName('img')
  $image.setAttribute('id', 'signup-image')
  $image.setAttribute('src', 'https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png')
  $image.setAttribute('height', '365px')
  $image.setAttribute('width', '400px')
  $Right.appendChild($image)

  $Main.appendChild($Left)
  $Main.appendChild($Right)

  return $Main
}

function buildUserProfile(item) {

  // <div id="profile-main">
  //   <img src="http://placehold.it/140x100" class="profile-image"/>
  //   <span class=profile-name></span>
  //   <span class="profile-city"></span>
  // </div>

  let $Main = newClassName('div', 'profile-main')

  let $img = newClassName('img', 'profile-image')
  $img.setAttribute('src', 'http://placehold.it/140x100')
  $img.setAttribute('height', '200px')
  $img.setAttribute('width', '200px')

  let $name = newClassName('span', 'profile-name')
  $name.textContent = 'Name: ' + item.first + ' ' + item.last

  let $city = newClassName('span', 'profile-city')
  $city.textContent = item.zip

  $Main.appendChild($img)
  $Main.appendChild($name)
  $Main.appendChild($city)

  return $Main
}
  // **************** END **************** //

  // **************** EVENT LISTENER FUNCTIONS **************** //
// The $ sign preceding a variable name is a naming convention that represents a DOM element.
let $form = document.getElementById('form-search')
let $term = $form.elements[0]
let $locationTerm = $form.elements[1]

let $signUp = document.getElementById('signup')
let $signUpButton = document.getElementById('sign-up')

let $businesses = document.getElementById('businesses')
let $business = document.getElementById('business')
let $review = document.getElementById('review')
let $profile = document.getElementById('profile')

// 1. UI View for user search.
// 2. UI View for single business.
// 3. UI View for review form.
// 4. UI View to submit new review.
// 5. UI View to toggle between Review Form and Single Business.
// 6. UI View for the user sign up form.
let submitMainSearch = function(event) {

  event.preventDefault()

  empty($businesses)
  empty($business)
  empty($review)
  empty($signUp)
  empty($profile)

  show($businesses)

  let userSearchValue = $term.value
  let locationValue = $locationTerm.value

  let matchingBusinesses = userSearch(companies, userSearchValue)
  let matchingCities = locationSearch(companies, locationValue)

  // Conditionals for no user input.
  if (matchingBusinesses.length === 0 ) {
    var $noResults = newClassName('h3', 'results')
      $noResults.textContent = 'No Results for ' + userSearchValue
      $businesses.appendChild($noResults)
      return
  }
  if (matchingCities.length === 0) {
    let $sorry = newClassName('h3', 'results')
      $sorry.textContent = 'Sorry, but we didn\'t understand the location you entered.'
      $businesses.appendChild($sorry)
      return
  }
  if (!locationValue.trim() && !userSearchValue.trim()) {
    let $noResults = newClassName('h3', 'results')
      $noResults.textContent = 'Hmm, something\'s missing?'
      $businesses.appendChild($noResults)
      return
  }

  // Conditionals for search results.
  if (locationValue.trim() && userSearchValue.trim()) {
    return matchingCities.forEach((item) => {
      let $item = buildBusinessList(item)
      $businesses.appendChild($item)
    })
  }
  if (!userSearchValue.trim()) {
    return matchingCities.forEach((item) => {
      let $item = buildBusinessList(item)
      $businesses.appendChild($item)
    })
  }
  if (!locationValue.trim()) {
    return matchingBusinesses.forEach((item) => {
      let $item = buildBusinessList(item)
      $businesses.appendChild($item)
    })
  }

  $term.select()
  $locationTerm.select()
}

let renderIndividualBusiness = function(event) {

  empty($business)

  hide($businesses)
  absolute($businesses)

  if (event.target.classList.value === 'business-name') {

    show($business)
    relative($business)

    companies.forEach((object) => {
      if (event.target.getAttribute('data-id') == object.id) {
        let $singleBusiness = buildSingleBusiness(object)
        $business.appendChild($singleBusiness)
      }
    })
  }
}

let renderReviewForm = function(event) {

  empty($review)

  if (event.target.classList.value === 'review-button') {

    show($review)
    hide($business)
    absolute($business)

    companies.forEach((object) => {
      if (event.target.getAttribute('data-id') == object.id) {
        let $form = buildReviewForm(object)
        $review.appendChild($form)
      }
    })
  }
}

let submitNewReview = function(event) {

  event.preventDefault()

  let $form = document.getElementById('reviewForm')

  let $nameTerm = $form.querySelector('input')
  let name = $nameTerm.value
  if (!name) return

  let $textTerm = $form.querySelector('textarea')
  let review = $textTerm.value
  if (!review) return

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

  // CSS to show/hide.
  show($business)
  relative($business)

  hide($review)
}

let renderToggleBusiness = function(event) {

  if (event.target.classList.value === 'review-name') {
    // CSS to show
    show($business)
    relative($business)

    // CSS to hide
    hide($review)
  }
}

let renderSignUpForm = function(event) {

  event.preventDefault()

  empty($signUp)

  if (event.target.getAttribute('id') === 'sign-up') {

    hide($businesses)
    hide($business)
    hide($review)

    let $view = buildSignUpForm()
    $signUp.appendChild($view)
  }
}

let submitNewProfile = function(event) {

  event.preventDefault()

  let $signUpForm = document.getElementById('signup-form')
  let $firstname = $signUpForm.elements[0]
  let $lastname = $signUpForm.elements[1]
  let $email = $signUpForm.elements[2]
  let $password = $signUpForm.elements[3]
  let $zip = $signUpForm.elements[4]

  let lastname = $lastname.value
  let email = $email.value
  let password = $password.value
  let zip = $zip.value

  localStorage.setItem('1', JSON.stringify({
    first: $firstname.value,
    last: lastname,
    email: email,
    password: password,
    zip: zip
  }))

  let get = localStorage.getItem('1')
  let person = JSON.parse(get)

  let $person = buildUserProfile(person)
  $profile.appendChild($person)

  // Hides Sign Up button on submission.
  let $button = document.getElementById('sign-up')
  hide($button)

  empty($signUp)
}
  // **************** END **************** //

  // **************** EVENT LISTENERS **************** //
// 1. Event listener that displays users' search.
// 2. Event listener that displays business landing page.
// 3. Event listener that shows the review form.
// 4. Event listener that captures users' review input.
// 5. Event listener that toggles between review form and it's associating business.
// 6. Event listener on the sign up submission.
$form.addEventListener('submit', submitMainSearch)

$signUpButton.addEventListener('click', renderSignUpForm)

$businesses.addEventListener('click', renderIndividualBusiness)

$business.addEventListener('click', renderReviewForm)

$review.addEventListener('submit', submitNewReview)

$review.addEventListener('click', renderToggleBusiness)

$signUp.addEventListener('submit', submitNewProfile)
  // **************** END ****************//
