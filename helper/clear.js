document.addEventListener('DOMContentLoaded', function() {
    var titles = document.querySelectorAll("h1,a")
    ;[].slice.call(titles).filter(function(el) {
     return el.innerText === "\\"
    }).forEach(function(t) {
     t.innerText = "Global"
    })

    var details = document.querySelectorAll(".span4.detailsbar")
    ;[].slice.call(details).forEach(function(el) {
     el.parentElement.removeChild(el)
    })

    var contents = document.querySelectorAll(".span8.content")
    ;[].slice.call(contents).forEach(function(el) {
     el.className = "span10 content namespace"
    })

    var navRight = document.querySelector(".nav.pull-right")
    navRight.parentElement.removeChild(navRight)

    document.querySelector("#___").style.paddingRight = "0px"
}, false)
