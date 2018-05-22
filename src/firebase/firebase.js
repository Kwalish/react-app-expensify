import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)  

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })    

// database.ref('expenses').push({
//     description: 'rent',
//     note: 'my rent',
//     amount: 19500,
//     createdAt: 150
// })

// database.ref('expenses').push({
//     description: 'coffee',
//     note: 'delicious coffee',
//     amount: 100,
//     createdAt: 750
// })

// database.ref('expenses').push({
//     description: 'gum',
//     note: 'chew chew',
//     amount: 190,
//     createdAt: 1005
// })

// database.ref('notes').push({
//     title: 'to do test',
//     body: 'go for a angular'
// })

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })   

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,

//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chengdu',
//         country: 'China'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('error:', e)
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     }).catch((e) => {
//         console.log('did not remove data', e)
//     })

// database.ref().update({
//     stressLevel: 10,
//     job: {
//         title: 'manager',
//         company: 'Amazon'
//     },
//     'location/city': 'Beijing'
// })