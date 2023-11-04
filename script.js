print = (a) => {
    return new Promise(resolve => {
        setTimeout(() => {
            //
            console.log(a);
            //
            resolve();
        }, 1000);
    });
};

/*
setTimeout(() => {
    console.log(a);
}, 1000);
*/

async function driver() {
    for (let i = 0; i < 10; i++) {
        await print(i);
        console.log("here");
    }
}

driver();
