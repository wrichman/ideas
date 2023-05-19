const wait = (ms = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}


async function go() {

    console.log("starting");
    
    await wait(2500).then(() => {
        console.log("waited 2.5s");
        return wait(1000);
    }).then(() => {
        console.log("waited an extra 1.0s");
        return wait(1000);
    })
    
    console.log("ending");

}

async function betterGo() {
    console.log("starting");

    await wait(2500);
    console.log("waited for 2.5s");
    await wait(1000);
    console.log("waited an extra 1.0s");
    await wait(1000);
    console.log("ending");
}



// betterGo();


// dummy function to emmulate getting data from API

function getData(type) {
    
    const key = `Data of type ${type}`;
    return new Promise((resolve, reject) => {

        if (type !== "string") {
            setTimeout(() => {
                reject(`Sorry, we don't provide data of type ${type}.`);
            }, 2500)

        } else {
            setTimeout(() => resolve({
                key : ['This is some data', 'another piece of data']
            }), 1500);
        }
        

    })

}

const useData = async () => {
    console.log("starting to use data");

    try {
        const dataP1 = getData("string");
        const dataP2 = getData("string");
        const [ data1, data2 ] = await Promise.all([dataP1, dataP2]);
        console.log(data1, data2);
    } catch(e) {
        console.error(e);
    } 



}

useData();