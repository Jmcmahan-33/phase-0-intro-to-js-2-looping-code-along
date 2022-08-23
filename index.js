let arrayNames = []


function writeCards(array,eventName) {
    for(let i = 0; i < array.length; i++ ) {
        let message = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`
        arrayNames.push(message)
        
    }
    return arrayNames
}

function countDown() {
    let countDown = 0
    while (countDown < 11) {
        console.log(countDown++)
    }
}