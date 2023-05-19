const answers = [];

const wait = (ms = 0) => {

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })

}

const destroyPopup = async (popup) => {
    popup.classList.remove("open");
    await wait(1000);
    popup.remove();
    popup = null;
}

function ask(options) {

    return new Promise(async (resolve) => {

        // 1. Create a popup
        const popup = document.createElement('form');
        popup.classList.add("popup");
        popup.insertAdjacentHTML('afterbegin',
        `<fieldset>
            <label>${options.title}</label>
            <input text = "text" name = "input"></input>
            <button type = "submit">Submit</button>    
        </fieldset>`);

        
        // 2. Check if its cancellable or not

        if (options.cancellable) {
            const cancelButton = document.createElement("button");
            cancelButton.type = "button";
            cancelButton.innerHTML = "Cancel";
            popup.firstElementChild.appendChild(cancelButton);
            cancelButton.addEventListener('click', () => {
                resolve(null);
                destroyPopup(popup);
            }, { once : true });

        }



        // 3. listen for submit event on the popup

        popup.addEventListener('submit', (e) => {
            e.preventDefault();
            resolve(e.target.input.value);
            destroyPopup(popup);
        }, { once : true })


        // 4. resolve the data on submit event
        // 5. insert popup into dom
        document.body.appendChild(popup); 
        
        // add a very small delay so that popup has time to transition.
        await wait(50);
        popup.classList.add('open');
    })
}

const buttons = document.querySelectorAll('.askMe');
buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
        let cancel = false;
        if (Object.keys(btn.dataset).includes("cancel")) cancel = true;
        const ans = await ask({title: btn.getAttribute('data-question'), cancellable : cancel});
        console.log(ans);
        answers.push(ans);
    }, { once : true });
})

