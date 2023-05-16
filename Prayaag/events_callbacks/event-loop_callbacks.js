/*  JavaScript is single threaded as supposed to multi-threaded. 

    This means that the language executes one thing at a time.

    For example, consider the below code.

*/

console.log('one');
setTimeout(() => {console.log('two')}, 3000);
console.log('three');


/*  Instead of waiting for the timeout to end, JS goes ahead and executes the next possible line of code,
    while putting the callback in setTimeout on a 'to-do list'

    There are 3 primary structures that are in play when it comes to executing JS code:
        1. Call stack - where function calls go
        2. Web APIs Queue - where event-listeners or API requests go. These move into the callback queue when the corresponding event
                            is triggered.
        3. Callback Queue - Where the corresponding callback functions from event-listeners go after the ^event has been triggered.

    The call stack adds event-listeners to the Web APIs Queue and takes functions to execute from the Callback Queue.
    Note that since these are queues, they operate on a first-in-first-out basis. 
*/



// Example of what Callback hell is
// (continously nesting setTimeout calls because we want things to happen one after each other -- synchronously -- rather
//  than separately -- asynchronously)


const box = document.querySelector("#box");

box.addEventListener('click', (e) => {
    const elm = e.currentTarget;
    elm.innerHTML = 'You Clicked!';

    setTimeout(() => {

        elm.classList.add('circle');
        
        setTimeout(() => {
            elm.classList.add('fade-away');
        }, 5000);
    }, 500)

})






