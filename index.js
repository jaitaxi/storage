// like function
let count = Number(localStorage.getItem("count"));
document.querySelector("#count").innerHTML=count;
const like = () => {
    count = count + 1;
    document.querySelector("#count").innerHTML = count;
    localStorage.setItem("count",count);
}

// comment function
let count01 = Number(localStorage.getItem("count01"));
document.querySelector("#count01").innerHTML=count01;
const comment = () => {
    count01 = count01 + 1;
    document.querySelector("#count01").innerHTML = count01;
    localStorage.setItem("count01",count01);
}

// follow function
let count02 = Number(localStorage.getItem("count02"));
document.querySelector("#count02").innerHTML=count02;
const follow = () => {
    count02 = count02 + 1;
    document.querySelector("#count02").innerHTML = count02;
    localStorage.setItem("count02",count02);
}

// share function
let count03 = Number(localStorage.getItem("count03"));
document.querySelector("#count03").innerHTML=count03;
const share = () => {
    count03 = count03 + 1;
    document.querySelector("#count03").innerHTML = count03;
    localStorage.setItem("count03",count03);
}

document.querySelector("#like").addEventListener("click", like)
document.querySelector("#comment").addEventListener("click", comment)
document.querySelector("#follow").addEventListener("click", follow)
document.querySelector("#share").addEventListener("click", share)