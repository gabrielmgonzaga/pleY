let companies = [
  {
    id: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/ogf44L114KyyySK0Vbun9g/o.jpg",
    name: "Walmart",
    address: "10120 Harbor Santa Ana, CA",
    reviews: {
        img: "http://emerysapp.com/wp-content/themes/emerysapp/img/person-placeholder.png",
        rating: 3,
        name: "illum qui",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  },
  {
    id: 1,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/JfNJ3j2vxczVT3Wkdde2hQ/ls.jpg",
    name: "Target",
    address: "1122 Seal Beach Blvd. Seal Beach, CA",
    reviews: {
      img: "http://emerysapp.com/wp-content/themes/emerysapp/img/person-placeholder.png",
      rating: 2,
      name: "quasi architecto",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  },
  {
    id: 2,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/8kKssMrOMAUpW5m9qTQ65A/o.jpg",
    name: "7-11",
    address: "380 Barranca Irvine, CA 92606",
    reviews: {
      img: "http://emerysapp.com/wp-content/themes/emerysapp/img/person-placeholder.png",
      rating: 5,
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
// 8. CSS to add red border in input isn't valid.
// 9. TimeStamp for date.
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

function red(id) {
  let a = id
  return a.style.border = '1px solid #d90007'
}

function green(id) {
  let a = id
  a.style.border = '1px solid green'
}

function date() {
  let millis = new Date()
  let month = millis.getMonth() + 1
  let day = millis.getDay() + 4
  let year = millis.getFullYear()

  return month + '/' + day + '/' + year
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

  let $rating = newClassName('span', 'business-rating')
  $rating.textContent = 'Rating: ' + item.reviews.rating

  let $address = newClassName('span', 'business-address')
  $address.textContent = item.address

  let $review = newClassName('span', 'business-review')
  $review.textContent = item.reviews.review

  $item.appendChild($rating)
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

  let $userRating = newClassName('span', 'business-main-rating')
  $userRating.textContent = 'Rating: ' + item.reviews.rating

  let $userReviews = newClassName('div')
  $userReviews.setAttribute('id', 'userReviews')
  $userReviews.textContent = item.reviews.review

  $item.appendChild($name)
  $item.appendChild($button)
  $item.appendChild($businessImages)
  $reviews.appendChild($userRating)
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
  //       <input type="text" id="ratingInput">
  //       <textarea type="submit" class="text-area"></textarea>
  //       <button> { Post Review } </button>
  //     </form>
  //   </div>
  // </div>

  let $main = newClassName('div', 'review-container')

  let $message = newClassName('span', 'review-message')
  $message.textContent = 'Write a Review'

  let $img = newClassName('img')
  $img.setAttribute('src', item.img)
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
  $input.setAttribute('id', 'ratingInput')
  $input.setAttribute('placeholder', 'Rating: 1-5')

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
  $message1.textContent = 'Sign Up For pleY'
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
  $zip.setAttribute('placeholder', 'City')
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
  $img.setAttribute('src', 'data:image/png;base64,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')
  $img.setAttribute('height', '200px')
  $img.setAttribute('width', '200px')

  let $name = newClassName('span', 'profile-name')
  $name.textContent = 'Name: ' + item.first + ' ' + item.last

  let $city = newClassName('span', 'profile-city')
  $city.textContent = 'City: ' + item.city

  let $reviews = newClassName('div', 'profile-reviews')
  $reviews.textContent = item.reviews

  $Main.appendChild($img)
  $Main.appendChild($name)
  $Main.appendChild($city)

  return $Main
}
  // **************** END **************** //

  // **************** EVENT LISTENER FUNCTIONS **************** //
// The $ sign preceding a variable name is a naming convention that represents a DOM element.
let $navigation = document.getElementById('navigation')
let $landing = document.getElementById('landing')
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
  empty($landing)

  hide($profile)
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

  // Grab localStorage info.
  let get = localStorage.getItem('1')
  let person = JSON.parse(get)

  let $form = document.getElementById('reviewForm')

  let $ratingTerm = $form.querySelector('input')
  if (!$ratingTerm.value) return red($ratingTerm)
  else green($ratingTerm)

  let $textTerm = $form.querySelector('textarea')
  if (!$textTerm.value) return red($textTerm)
  else green($textTerm)

  let $reviews = newClassName('div', 'business-main-reviews')

  let $date = newClassName('span')
  $date.setAttribute('id', 'time-stamp')
  $date.textContent = date()

  let $userName = newClassName('a')
  $userName.setAttribute('href', '#')
  $userName.setAttribute('id', 'userName')
  if (!person) return alert('Please Sign Up before posting a review')
  $userName.textContent = person.first + ' ' + person.last[0] + '.'

  let $userImage = newClassName('img')
  $userImage.setAttribute('src', 'http://emerysapp.com/wp-content/themes/emerysapp/img/person-placeholder.png')
  $userImage.setAttribute('id', 'smallImage')

  let $userRating = newClassName('span', 'business-main-rating')
  person.rating = $ratingTerm.value
  $userRating.textContent = 'Rating: ' + person.rating

  localStorage.setItem('1', JSON.stringify(person))

  let $userReview = newClassName('div')
  $userReview.setAttribute('id', 'userReviews')
  person.reviews = $textTerm.value
  $userReview.textContent = person.reviews

  localStorage.setItem('1', JSON.stringify(person))

  $reviews.appendChild($userRating)
  $reviews.appendChild($date)
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
    // CSS to show/hide.
    show($business)
    relative($business)

    hide($review)
  }
}

let renderToggleProfile = function(event) {
  if (event.target.classList.value === 'signup-button') {
    let get = localStorage.getItem('1')
    let person = JSON.parse(get)

    let $person = buildUserProfile(person)
    $profile.appendChild($person)

    show($profile)
    hide($businesses)
    hide($business)
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
  let $city = $signUpForm.elements[4]

  localStorage.setItem('1', JSON.stringify({
    first: $firstname.value,
    last: $lastname.value,
    email: $email.value,
    password: $password.value,
    city: $city.value
  }))

  let get = localStorage.getItem('1')
  let person = JSON.parse(get)

  let $person = buildUserProfile(person)
  $profile.appendChild($person)

  // Builds new button to toggle to profile.
  let $profileButton = newClassName('button', 'signup-button')
  $profileButton.textContent = person.first[0] + person.last[0]
  $navigation.appendChild($profileButton)

  // Hides Sign Up button on submission.
  let $button = document.getElementById('sign-up')
  hide($button)

  empty($signUp)
  hide($landing)
}

let submitLandingProfile = function(event) {

  event.preventDefault()

  let $landingForm = document.getElementById('landing-form')

  let $firstname = $landingForm.elements[0]
  if (!$firstname.value) return red($firstname)
  else green($firstname)

  let $lastname = $landingForm.elements[1]
  if (!$lastname.value) return red($lastname)
  else green($lastname)

  let $email = $landingForm.elements[2]
  if (!$email.value) return red($email)
  else green($email)

  let $password = $landingForm.elements[3]
  if (!$password.value) return red($password)
  else green($password)

  let $city = $landingForm.elements[4]
  if (!$city.value) return red($city)
  else green($city)

  localStorage.setItem('1', JSON.stringify({
    first: $firstname.value,
    last: $lastname.value,
    email: $email.value,
    password: $password.value,
    city: $city.value
  }))

  let get = localStorage.getItem('1')
  let person = JSON.parse(get)

  let $person = buildUserProfile(person)
  $profile.appendChild($person)

  // Hides Sign Up button on submission.
  let $button = document.getElementById('sign-up')
  hide($button)

  // Builds new button to toggle to profile.
  let $profileButton = newClassName('button', 'signup-button')
  $profileButton.textContent = person.first[0] + person.last[0]
  $navigation.appendChild($profileButton)

  empty($landing)
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

$landing.addEventListener('submit', submitLandingProfile)

document.addEventListener('click', renderToggleProfile)
  // **************** END ****************//

localStorage.clear()
