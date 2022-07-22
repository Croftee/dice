function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


var dice1 = new Array("img/Die_face_1b.svg","img/Die_face_2b.svg","img/Die_face_3b.svg","img/Die_face_4b.svg","img/Die_face_5b.svg","img/Die_face_6b.svg");
var dice2 = new Array("img/Die_face_1b.svg","img/Die_face_2b.svg","img/Die_face_3b.svg","img/Die_face_4b.svg","img/Die_face_5b.svg","img/Die_face_6b.svg");

    async function roll() {
        
        var randomNum = Math.floor(Math.random() * dice1.length);
        document.getElementById("dice1").src = dice1[randomNum];
        await delay(600);

         var randomNum = Math.floor(Math.random() * dice2.length);
        document.getElementById("dice2").src = dice2[randomNum];
    
        var randomNum = Math.floor(Math.random() * dice1.length);
        document.getElementById("dice1").src = dice1[randomNum];
        await delay(600);

        var randomNum = Math.floor(Math.random() * dice1.length);
        document.getElementById("dice1").src = dice1[randomNum];
     

        var randomNum = Math.floor(Math.random() * dice2.length);
        document.getElementById("dice2").src = dice2[randomNum];
        await delay(600);
    
        var randomNum = Math.floor(Math.random() * dice2.length);
        document.getElementById("dice2").src = dice2[randomNum];
        await delay(600);

    }


