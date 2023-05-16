// dummy function to emmulate getting data from API

function getData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => resolve(['This is some data', 'another piece of data']), 1500);
    })

}


// Sequentially getting Data


// getData()
// .then((response) => {
//     console.log(response);
//     return getData();
// })
// .then((response) => {
//     console.log(response, "this was the second getData's data");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Another Promise resolved");
//         }, 1500);
//     });
        
// })
// .then((res) => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("Error: This promise was rejected"), 1500);
//     })
// })  
// .catch((err) => console.error("Error", err));




// What if we want to wait untill all the promises are resolved. that is, until we have all our data?

// Getting Data All at once

// These all resolve asynchronously.

const user_data = getData();
const contact_data = getData();
const bio_data = getData();

// const largePromise = Promise.all([user_data, contact_data, bio_data]);

// This .then() only runs when all of the promises in the above array are fulfilled (either resolved or rejected)

// largePromise.then((response) => {
//     response.forEach((data, id) => {
//         console.log(data, `This was Promise #${id + 1}.`);
//     })
// })
// .catch((err) => {
//     console.log(err);
// })


// Promise.race()

/* 

Sometimes, we want to focus on the promise which will be fulfilled first. That is, we want data from the source
that will give it to us the quickest.

*/

const quickData = Promise.race([user_data, contact_data, bio_data]);

quickData
.then((response) => console.log(response))
.catch(error => console.error(error));

// In this case, all the promises are set to resolve after 1500 ms = 1.5 s, so they all "win the race".
// So, Promise.race() simply returns the first response from the array. This is partly because the callback queue
// will return the first response, then the second response, and then the third response. So technically, the first 
// promise does "win.s"