
let span = document.querySelectorAll("span")


let win1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]








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

            if (count) {

                checkwin(player2, i)
                if (winers(player2.mood, i)) {
                    
                } else {
                    count = false;
                }

            } else {

                checkwin(player1, i)
                if (winers(player1.mood, i)) {
                  
                } else {
                    count = true;
                }
            }
        } else {

        }

    })

}








function checkwin(player, i) {

    span[i].textContent = player.mood;
    player.played.push(i)
    celse.push(i)
    

}

function isEmpty(i) {

    if (celse.includes(i)) {
        return false
    }
    return true
}

let recet = 0;
function winers(player, i) {
    recet++
    win1.forEach(comp => {

        if (comp.every(index => span[index].textContent === player)) {
              
            comp.forEach(index => {
                span[index].classList.add("win");
                player1.mood = ''
                player2.mood = ''
                player1.played = []
                 player2.played = []
                   
            })
          
          
            
        } else if (recet == 9) {
            for (let i = 0; i < 9; i++) {
                span[i].classList.add("don")
                
            }
        }

    });

    return false

}


function rest() {
    span.forEach(card => {
        card.innerHTML = "";
        card.classList.remove("win");
        card.classList.remove("don")
    })
    celse = []
    player1.played = []
    player2.played = []

}



