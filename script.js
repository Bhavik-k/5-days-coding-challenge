const scrollLeftss = document.getElementsByClassName("leftScroll")
const scrollrightss = document.getElementsByClassName("rightScroll")



for (let i = 0; i < scrollLeftss.length; i++) {
    const scrollLeft = scrollLeftss[i];
    scrollLeft.addEventListener("click", function (e) {
        const DivToScrollLeft = e.target.parentElement;
        DivToScrollLeft.scrollLeft = DivToScrollLeft.scrollLeft-DivToScrollLeft.offsetWidth
    })
}
for (let i = 0; i < scrollrightss.length; i++) {
    const scrollLeft = scrollrightss[i];
    scrollLeft.addEventListener("click", function (e) {
        const DivToScrollLeft = e.target.parentElement;
        DivToScrollLeft.scrollLeft = DivToScrollLeft.scrollLeft+DivToScrollLeft.offsetWidth
    })
}