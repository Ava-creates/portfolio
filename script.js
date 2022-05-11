var c=document.getElementById("yay");

document.getElementById("yay").onclick = function () {

    var g=document.getElementById("ll");
    if (g.style.display === "none") { 
   
    c.style.top="-8vh";
   
    c.style.transform="scale(1.6)";
    c.style.right="-4vw";
    // c.style.transition = "transform .3s ease";
    document.getElementById("ll").style.display="block";

    }

    else
    {
        c.style.transform="scale(1)";
        c.style.top="-10vh";
        c.style.right="-4vw";
        g.style.display="none";
    
    }


}

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 80000);
}

for (let i = 1; i < 4; i++) {
    var l = "link" + i ;
    typeWriter(document.getElementById(l));
  }


  document.getElementById("link1").onclick = function () {
    location.href = "comm_lab.html";
}

document.getElementById("link2").onclick = function () {
    location.href = "machine_learning.html";
}


