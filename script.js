let i = 0, j = 0, k = 0, l = 0;
let timer, colon_timer;
  const tag = document.getElementById("colontext");

function clock(I, J, K, L) {

    i = I;
    j = J;
    k = K;
    l = L;


    // timer = setInterval(() => {


    // }, 1000);
  
    colon_timer = setInterval(() => {
        if (tag.style.display === "none") {
            tag.style.display = "block";
            if (i == 9) {
                j++;
                i = -1;
            }
            if (j == 6) {
                k++;
                j = 0;
                i = -1;
            }
            if (k == 10) {
                l++;
                k = 0;
                j = 0;
                i = -1;
            }
            document.getElementById("beep").play();
            i++;
            document.getElementById("s1").innerText = i;
            document.getElementById("s2").innerText = j;
            document.getElementById("m1").innerText = k;
            document.getElementById("m2").innerText = l;
            
        } else {
            tag.style.display = "none";
        }


    }, 500);
}


let start = document.getElementById("start");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");
let stop = document.getElementById("stop");

start.addEventListener("click", e => {
    // clearInterval(timer);
    clearInterval(colon_timer);
    clock(i, j, k, l);
})
pause.addEventListener("click", e => {
    // clearInterval(timer);
    clearInterval(colon_timer);
    tag.style.display="block";
})
restart.addEventListener("click", e => {
    // clearInterval(timer);
    clearInterval(colon_timer);
    i = 0, j = 0, k = 0, l = 0;
    document.getElementById("s1").innerText = i;
    document.getElementById("s2").innerText = j;
    document.getElementById("m1").innerText = k;
    document.getElementById("m2").innerText = l;

    clock(i, j, k, l);
    tag.style.display="block";

})
stop.addEventListener("click", e => {
    // clearInterval(timer);
    clearInterval(colon_timer);
    i = 0, j = 0, k = 0, l = 0;
    document.getElementById("s1").innerText = i;
    document.getElementById("s2").innerText = j;
    document.getElementById("m1").innerText = k;
    document.getElementById("m2").innerText = l;
    tag.style.display="block";
})