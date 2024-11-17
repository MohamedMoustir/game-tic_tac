
let span = document.querySelectorAll("span")


let win1 = [
    [0, 1, 2], // الصف الأول
    [3, 4, 5], // الصف الثاني
    [6, 7, 8], // الصف الثالث
    [0, 3, 6], // العمود الأول
    [1, 4, 7], // العمود الثاني
    [2, 5, 8], // العمود الثالث
    [0, 4, 8], // القطر الأول
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
                if (winers(player2.mood)) {
                
                }else{
                    count = false;
                }
                
             
                

            } else {
              
                checkwin(player1, i)
                if (winers(player1.mood)) {
                
                }else{
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
  
    
   
    console.log(player.played);
    

}

function isEmpty(i) {

    if (celse.includes(i)) {
        return false
    }
    return true

}



function winers(player) {

win1.forEach(comp => {
    // console.log(comp.every(index => span[index].textContent===player.mood));
     if( comp.every(index => span[index].textContent===player)){
     span.forEach(element => {
    element.classList.add("win");
        
     });
        
        
     }else{
        
    }
});



    }

    console.log("dd",span);



