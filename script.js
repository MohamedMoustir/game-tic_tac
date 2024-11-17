
let span = document.querySelectorAll("span")

let count = true;
let celse = []
let player1 = {
    mood: "X",
    soccer: 0,
    played: []
}

let player2 = {
    mood: "O",
    soccer: 1,
    played: []
}
// let dd =true

for (let i = 0; i < 9; i++) {

    span[i].addEventListener('click', () => {
        if (isEmpty(i)) {
            console.log("eeee");
            if (count) {
                checwin(player2, i)
                count = false;
                isEmpty(i)

            } else {
                checwin(player1, i)
                count = true;
                isEmpty(i)
            }
        } else {
            console.log("eeeeee");

        }

    })

}





console.log(celse);


function checwin(player, i) {

    span[i].textContent = player.mood;
 
    celse.push(i)

}

function isEmpty(i) {

    if (celse.includes(i)) {
        return false
    }
    return true

}
// console.log(dd);



// winers()






// function winers() {

//     if (col_0.textContent === 'O' && col_1.textContent === 'O' && col_2.textContent === 'O') {

//         col_0.classList.add("win")
//         col_1.classList.add("win")
//         col_2.classList.add("win")


//     }




// }
// winers()