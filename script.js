const scrollLeftss = document.getElementsByClassName("leftScroll")
const scrollrightss = document.getElementsByClassName("rightScroll")



for (let i = 0; i < scrollLeftss.length; i++) {
    const scrollLeft = scrollLeftss[i];
    
    setInterval(function () {
        ChangeDisplay(scrollLeft);
    },500);
    console.log('working');
    scrollLeft.addEventListener("click", function (e) {
        const DivToScrollLeft = e.target.parentElement;
        DivToScrollLeft.scrollLeft = DivToScrollLeft.scrollLeft-DivToScrollLeft.offsetWidth
    })
}
for (let i = 0; i < scrollrightss.length; i++) {
    const scrollLeft = scrollrightss[i];
    
    setInterval(function () {
        ChangeDisplayY(scrollLeft);
    },500);

    scrollLeft.addEventListener("click", function (e) {
        const DivToScrollLeft = e.target.parentElement;
        DivToScrollLeft.scrollLeft = DivToScrollLeft.scrollLeft+DivToScrollLeft.offsetWidth
    })
}


function ChangeDisplay(scrollLeft) {
    if (scrollLeft.parentElement.scrollLeft == 0) {
        // console.log(scrollLeft.parentElement.scrollLeft);
        scrollLeft.style.display = 'none';
    }else{
        scrollLeft.style.display = 'flex';

    }
}
function ChangeDisplayY(scrollLeft) {
    console.log(scrollLeft.parentElement.scrollLeft);
    console.log(scrollLeft.scrollWidth-scrollLeft.offsetWidth);
    if (scrollLeft.parentElement.scrollLeft == scrollLeft.scrollWidth-scrollLeft.offsetWidth){
        // console.log(scrollLeft.parentElement.scrollLeft);
        scrollLeft.style.display = 'none';
    }else{
        scrollLeft.style.display = 'flex';

    }
}