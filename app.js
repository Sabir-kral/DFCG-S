$(document).ready(function () {
    let buton1 = document.querySelector(".show")
    buton1.addEventListener("click",function () {
        $(".item1").toggle(2000)
    })
    let buton2 = document.querySelector(".fadeout")
    buton2.addEventListener("click",function () {
        $(".item2").fadeOut(2000)
    })
    buton2.addEventListener("dblclick",function () {
        $(".item2").fadeIn(2000)
    })
    $(".fadeto").click(function (){
        if ($(".fadeto").text()=="fade to 25%") {
            $(".item3").fadeTo(2000,0.25)
            $(".fadeto").text("fade to 1")
        } else {
            $(".item3").fadeTo(2000,1)
            $(".fadeto").text("fade to 25%")
        }
    })
    let buton4 = document.querySelector(".slide")
    buton4.addEventListener("click",function () {
        $(".item4").slideUp(2000)
    })
    buton4.addEventListener("dblclick",function () {
        $(".item4").slideDown(2000)
    })
})