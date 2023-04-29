        const pro_button = document.createElement("a")
        pro_button.setAttribute("href", "#")
        pro_button.setAttribute("class", "btn")
        pro_button.innerText = "Pro Subscription"
        const target_first = document.querySelector(".nav-center>div:nth-child(3)")
        target_first.appendChild(pro_button)


        const new_recipe = document.createElement("a")
        new_recipe.setAttribute("href", "#")
        new_recipe.innerText = "Chinese (7)"
        new_recipe.style.color = "#993333"
        new_recipe.style.fontSize = "24px"
        const target_second = document.querySelector(".tags-container")
        target_second.appendChild(new_recipe)


        const new_card = document.createElement("div")
        new_card.setAttribute("class", "card")
        new_card.innerHTML = `<h2>add 6th card here</h2>`
        const target_third = document.querySelector(".recipe-gallery")
        target_third.appendChild(new_card)
