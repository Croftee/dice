var ScoreModal = new bootstrap.Modal(document.getElementById("Score"));
var DrawModal = new bootstrap.Modal(document.getElementById("Draw"));
var score1
var score2
var playernum   


function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


var dice1 = new Array("img/Die_face_1b.svg","img/Die_face_2b.svg","img/Die_face_3b.svg","img/Die_face_4b.svg","img/Die_face_5b.svg","img/Die_face_6b.svg");
var dice2 = new Array("img/Die_face_1b.svg","img/Die_face_2b.svg","img/Die_face_3b.svg","img/Die_face_4b.svg","img/Die_face_5b.svg","img/Die_face_6b.svg");

    async function roll() {
        
        var randomNum1 = Math.floor(Math.random() * dice1.length);
        document.getElementById("dice1").src = dice1[randomNum1];
        await delay(600);

        var randomNum2 = Math.floor(Math.random() * dice2.length);
        document.getElementById("dice2").src = dice2[randomNum2];
    
        var randomNum1 = Math.floor(Math.random() * dice1.length);
        document.getElementById("dice1").src = dice1[randomNum1];
        await delay(600);

        var randomNum1 = Math.floor(Math.random() * dice1.length);
        document.getElementById("dice1").src = dice1[randomNum1];
     
        var randomNum2 = Math.floor(Math.random() * dice2.length);
        document.getElementById("dice2").src = dice2[randomNum2];
        await delay(600);
    
        var randomNum2 = Math.floor(Math.random() * dice2.length);
        document.getElementById("dice2").src = dice2[randomNum2];
        await delay(600);

        score1 = randomNum1 + 1;
        score2 = randomNum2 + 1;

        checkscore()

    }


function checkscore()

{

    if (score1 > score2)
        {
        playernum = 1
        document.getElementById("playernum").innerHTML = playernum;
        document.getElementById("diceval").innerHTML = score1;
        ScoreModal.show();
        return true;
        }
    if (score2 > score1)
        {
        playernum = 2
        document.getElementById("playernum").innerHTML = playernum;
        document.getElementById("diceval").innerHTML = score2;
        ScoreModal.show();
        return true;
        }
    else (score1 == score2)
        {
        DrawModal.show();
        return true;
        }
    
    
}



