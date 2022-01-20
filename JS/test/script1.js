function getResult(actions) {
    let isTurn = false;
    let isEnter = false;
    let result = 0;

    for (let index = 0; index < actions.length; index++) {

        if (actions[index] === 'power') {

            if (isTurn) {
                isTurn = false;
                isEnter = false;
            } else {
                isTurn = true;
                isEnter = false;
            }
        }

        if (isTurn) {

            if (actions[index] === 'keystrokes') {
                isEnter = true;
            }
        }

        if (isEnter && isTurn) {

            if (actions[index] === 'click' && actions[index + 1] === 'click') {
                result += 1;
                index += 1;
            }
        }
    }

    return result;
}

console.log(getResult(["power", "keystrokes", "click", "click", "power", "click", "click", "click", "click", 'power', "click", "click"]));