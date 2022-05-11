
document.getElementById("cp1").onclick = function () {
    document.getElementById("pop-up1").style.display="flex";
    document.getElementById("pop-up2").style.display="none";
    document.getElementById("pop-up3").style.display="none";
}
// document.getElementById("pop-up1").onclick = function () {
//     document.getElementById("pop-up1").style.display="none";
// }

document.getElementById("cp2").onclick = function () {
    document.getElementById("pop-up2").style.display="flex";
    document.getElementById("pop-up1").style.display="none";
    document.getElementById("pop-up3").style.display="none";
}
// document.getElementById("pop-up2").onclick = function () {
//     document.getElementById("pop-up2").style.display="none";
// }

document.getElementById("cp3").onclick = function () {
    document.getElementById("pop-up3").style.display="flex";
    document.getElementById("pop-up1").style.display="none";
    document.getElementById("pop-up2").style.display="none";
}
// document.getElementById("pop-up3").onclick = function () {
//     document.getElementById("pop-up3").style.display="none";
// }

// document.getElementById("cp2").onclick = function () {
//     location.href = "comm_lab.html";
// }

// document.getElementById("cp3").onclick = function () {
//     location.href = "comm_lab.html";
// }

document.getElementById("b1").onclick = function () {
    document.getElementById("pop-up1").style.display="none";
    document.getElementById("pop-up3").style.display="none";
    document.getElementById("pop-up2").style.display="none";
}
document.getElementById("b2").onclick = function () {
    document.getElementById("pop-up3").style.display="none";
    document.getElementById("pop-up1").style.display="none";
    document.getElementById("pop-up2").style.display="none";
}
document.getElementById("b3").onclick = function () {
    document.getElementById("pop-up3").style.display="none";
    document.getElementById("pop-up1").style.display="none";
    document.getElementById("pop-up2").style.display="none";
}