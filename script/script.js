let target = document.querySelectorAll("[data-animation]")
let windowTop


const debounce = function(func,wait,immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null
            if(!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later,wait)
        if(callNow) func.apply(context, args)
    }
}


function animeScroll(){
target.forEach(function(e){
    windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    if((windowTop) > e.offsetTop){
        e.classList.add("animate")
    } else{
        e.classList.remove("animate")
    }
})
}

animeScroll()


if(target.length){
window.addEventListener('scroll',debounce(function(){
    animeScroll()
},80))}
