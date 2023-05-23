const wait = async (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
    const data = await fetch("https://recipes.beginnerjavascript.com/api");
    await wait(1000);
    return await data.json();
}

const list = document.querySelector(".list");
const loading = document.createElement('h1');
loading.innerHTML = "Loading... Please Wait";
loading.setAttribute("class", "loading");
list.appendChild(loading);

getData()
.then(data => {

    list.removeChild(loading);
    console.log(data);

    data['results'].forEach(info => {
        const item = document.createElement('li');
        const name = document.createElement('h2');
        const ingredients = document.createElement('p');
        const picture = document.createElement('img');
        
        name.innerHTML = info['title'];
        ingredients.innerHTML = info['ingredients'];
        picture.src = info['thumbnail'];
        picture.width = 300;
        picture.height = 300;
        picture.addEventListener('click', () => window.open(info['href']));

        item.appendChild(name);
        item.appendChild(ingredients);
        item.appendChild(picture);
        
        list.appendChild(item);
    })
})