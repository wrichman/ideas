//XMLHTTPREQUEST
//异步无刷新/局部刷新
const button = document.querySelector ('a');
const image = document.querySelector('img');

function ajaxPromise() {
    let promise = new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'egg.gif', true);
        xhr.onreadystatechange = () => {
            if( xhr.readyState === 4 ) {
                if( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(xhr.responseURL);
                } else {
                    reject(new Error(xhr. statusText));
                }
           }
         }
         xhr. send(null);
    });
    return promise;
}

button.addEventListener('click', () => {
    ajaxPromise()
       .then (responseURL =>{
           image.src = responseURL;
       })
       .catch (statusText => {
        console.log(statusText);
       })
})
