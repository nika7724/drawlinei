function sov(ms) {
    return new Promise(func => setTimeout(func, ms))
}

async function doSomethingAsync() {
    console.log('before sleep')
    await sov(2000)
    console.log('after sleep')
}

console.log('start')
doSomethingAsync();
console.log('Finito')