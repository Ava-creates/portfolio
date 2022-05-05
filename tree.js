let flowers1 = document.getElementsByClassName('flowers_1');

for(let i=0; i<flowers1.length;i++){
    flowers1[i].addEventListener('click', flowersFunction1)
}

function flowersFunction1(){
    console.log("fds");
}