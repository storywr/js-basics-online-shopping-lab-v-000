var cart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  var newArray = []
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else { for (var i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]
      newArray.push(`${item} at $${price}`)
    }
    console.log(`In your cart, you have ${newArray.join(', ')}.`)
  }
}

function removeFromCart(item) {
  var itemIsInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      itemIsInCart = true
    }
  }
  if (!itemIsInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
  cart = []
}
