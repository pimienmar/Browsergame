let charLevel = 1;
let currentCharExp = 0;
let nextLevelExp = 30;

const minDamage = 10;
const levelUpPlusStats = 5;
let bossTowerOpen = false;


const char = {
    exp: currentCharExp, 
    level: charLevel, 
    maxhealth: 100,
    health: 100,
    attack: 20, 
    defense: 15
};

document.getElementById("expdiv").innerHTML = ("Exp: " + char.exp + "/" + nextLevelExp);
document.getElementById("leveldiv").innerHTML = ("Level: " + char.level);


function gainExp() {
    char.exp = currentCharExp + 10;
    if (currentCharExp == nextLevelExp) {
        charLevel++;
        char.health = char.health + levelUpPlusStats;
        char.attack = char.attack + levelUpPlusStats;
        char.defense = char.defense + levelUpPlusStats;
        nextLevelExp = nextLevelExp + 30;
    }
    
document.getElementById("leveldiv").innerHTML = ("Level: " + char.level);
document.getElementById("expdiv").innerHTML = ("Exp: " + char.exp + "/" + nextLevelExp);
}

const enemy1 = {
    health: 60,
    maxhealth: 60,
    attack: 20, 
    defense: 10
};

const enemy2 = {
    health: 120,
    maxhealth: 120,
    attack: 25, 
    defense: 15
};

document.getElementById("playerHealth").innerHTML = "Health: " + char.health + "/" + char.maxhealth;
document.getElementById("playerAttack").innerHTML = "Attack:  " + char.attack + "  Defense: " + char.defense;

function fightRandomMonster(){
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        
        case 1:
            console.log(randomNumber); //test
            setEnemyImg1();
            fight();
            break;

        case 2:
            console.log(randomNumber); //test         
            setEnemyImg2();   
            fight2();
            break;
        
    }
}

function setEnemyImg1(){
    let imageEnemy1 = document.getElementById('setenemyimg');
    imageEnemy1.src = "img/monster1.png";
    document.getElementById("setenemyimg").innerHTML = imageEnemy1;
}

function setEnemyImg2(){
    let imageEnemy2 = document.getElementById('setenemyimg');
    imageEnemy2.src = "img/monster2.png";
    document.getElementById("setenemyimg").innerHTML = imageEnemy2;
}


function charAttackEnemy1(){
    let charAtkDefDiff = char.attack - enemy1.defense;
    if (charAtkDefDiff < 0){
        charAtkDefDiff = 0;
    }
    enemy1.health = enemy1.health - (charAtkDefDiff + minDamage);
}

function charAttackEnemy2(){
    let charAtkDefDiff = char.attack - enemy2.defense;
    if (charAtkDefDiff < 0){
        charAtkDefDiff = 0;
    }
    enemy2.health = enemy2.health - (charAtkDefDiff + minDamage);
}

function enemy1Attack(){
    let enemy1AtkDefDiff = enemy1.attack - char.defense;
    if (enemy1AtkDefDiff < 0) {
        enemy1AtkDefDiff = 0;
    }
    char.health = char.health - (enemy1AtkDefDiff + minDamage);
}

function enemy2Attack(){
    let enemy2AtkDefDiff = enemy2.attack - char.defense;
    if (enemy2AtkDefDiff < 0) {
        enemy2AtkDefDiff = 0;
    }
    char.health = char.health - (enemy2AtkDefDiff + minDamage);
}

function fightwon(){
if (char.health <= 0) {
    document.getElementById("whoWon").innerHTML = "You lost this fight.. try again";
    } else {
        document.getElementById("whoWon").innerHTML = "You Win! You become stronger";
        gainExp();
    }
}


/*
for (charLevel; charLevel < 10; i++) {
    nextLevelExp = nextLevelExp * i * 20;
}
*/

function setCharImg1(){
    let image1 = document.getElementById('setimg');
    image1.src = "img/char1.png";
    document.getElementById("imgtest").innerHTML = image1;
}

function setCharImg2(){
    let image2 = document.getElementById('setimg');
    image2.src = "img/char2.png";
    document.getElementById("imgtest").innerHTML = image2;
}

function setCharImg3(){
    let image3 = document.getElementById('setimg');
    image3.src = "img/char3.png";
    document.getElementById("imgtest").innerHTML = image3;
}

function setCharImg4(){
    let image4 = document.getElementById('setimg');
    image4.src = "img/char4.png";
    document.getElementById("imgtest").innerHTML = image4;
}


function fight(){
    setInterval(() => {  // while wird zu if wenn man setInterval nutzen möchte
        
    if (char.health > 0 && enemy1.health > 0){
        console.log("char health: " + char.health);
        console.log("enemy health: " + enemy1.health);
        document.getElementById("playerHealth").innerHTML = "Health: " + char.health + "/" + char.maxhealth;
        document.getElementById("monsterHealth").innerHTML = "Health: " + enemy1.health + "/" + enemy1.maxhealth;

        charAttackEnemy1();
        enemy1Attack();
        console.log("char health: " + char.health);
        console.log("enemy health: " + enemy1.health);
        document.getElementById("playerHealth").innerHTML = "Health: " + char.health + "/" + char.maxhealth;
        document.getElementById("monsterHealth").innerHTML = "Health: " + enemy1.health + "/" + enemy1.maxhealth;
    
        if (char.health <= 0 || enemy1.health <= 0){
            char.health = char.maxhealth;
            //location.reload();
        }
        fightwon();
    }
}, 2000)
    
}

function fight2(){
    setInterval(() => {  // while wird zu if wenn man setInterval nutzen möchte
        
    if (char.health > 0 && enemy2.health > 0){
        console.log("char health: " + char.health);
        console.log("enemy health: " + enemy2.health);
        document.getElementById("playerHealth").innerHTML = "Health: " + char.health + "/" + char.maxhealth;
        document.getElementById("monsterHealth").innerHTML = "Health: " + enemy2.health + "/" + enemy2.maxhealth;

        charAttackEnemy2();
        enemy2Attack();
        console.log("char health: " + char.health);
        console.log("enemy health: " + enemy2.health);
        document.getElementById("playerHealth").innerHTML = "Health: " + char.health + "/" + char.maxhealth;
        document.getElementById("monsterHealth").innerHTML = "Health: " + enemy2.health + "/" + enemy2.maxhealth;
    
        if (char.health <= 0 || enemy2.health <= 0){
            char.health = char.maxhealth;
            //location.reload();
        }
        fightwon();
    }
}, 2000)
}