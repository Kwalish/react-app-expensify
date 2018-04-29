//
// Object Destructuring
//

// const person = {
//     name: 'Fabien',
//     age: 31,
//     location: {
//         city: 'Chengdu',
//         temp: 28
//     }
// }

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age} year old.`)

// const { city, temp: temperature } = person.location

// if ( city && temperature ) {
//     console.log(`${city} has a ${temperature} degres temperature`)
// }

// const book = {
//     title: 'Harry Potter',
//     author: 'J.K Rowling',
//     publisher: {
//         name: 'Pinguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

//
// Array Destructuring
//

// const address = ['1299 super street', 'City', 'Country']

// const [, city, country] = address

// console.log(`You are in ${country} in the ${city}`)

const menu = ['Coffee (hot)', '$1.00', '$1.50', '$2.00']

const [order, , price, ] = menu

console.log(`a ${order} cost ${price}`)