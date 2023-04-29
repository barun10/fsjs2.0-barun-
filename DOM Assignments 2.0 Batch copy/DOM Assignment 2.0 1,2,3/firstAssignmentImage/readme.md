***first assignment***

***task 1***
    
    const nav = document.querySelector("nav")
    const ul = nav.querySelector("ul")
    ul.lastElementChild.innerHTML = `<li><a href = "#">Projects</a></li>`
    const li = document.createElement("li")
    li.innerHTML = `<a href= "#">Hire me</a>`
    ul.appendChild(li)
    
    const footer = document.querySelector("footer")
    footer.removeChild(footer.querySelector("ul"))

***task 2***

    const nav = document.querySelector("nav")
    const ul = nav.querySelector("ul")
    ul.lastElementChild.innerHTML = `<li><a href = "#">Projects</a></li>`

    const ip = document.querySelector("input")
    ip.setAttribute("placeholder", "Search My Project")
    const footer = document.querySelector("footer")
    footer.removeChild(footer.querySelector("ul"))

***task 3***

    const nav = document.querySelector("nav")
    const ul = nav.querySelector("ul")
    ul.lastElementChild.innerHTML = `<li><a href = "#">Projects</a></li>`
    const second = document.querySelector("span:nth-child(3)")
    second.textContent = "an Employee"
    const third = document.querySelector("span:nth-child(5)")
    third.textContent = "iNeuron Intelligence Pvt Ltd"

***task 4***

    const nav = document.querySelector("nav")
    const ul = nav.querySelector("ul")
    ul.lastElementChild.innerHTML = `<li><a href = "#">Projects</a></li>`

    const person = document.querySelector("img")
    person.setAttribute("src", "./assets/person-image.jpg")

***task 5***

    const nav = document.querySelector("nav")
    const ul = nav.querySelector("ul")
    ul.lastElementChild.innerHTML = `<li><a href = "#">Projects</a></li>`
    const heroright = document.querySelector(".hero-right-section-btns")
    console.log(heroright)
    const newb = document.createElement("button")
    newb.textContent = "Support me"
    heroright.appendChild(newb)


