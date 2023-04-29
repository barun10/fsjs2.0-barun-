        document.body.style.marginLeft = "20" + "px"

        const so = document.querySelectorAll(".clash-card")
        so.forEach(element => {
            element.style.width = "246" + "px"
            element.style.fontSize = "11.1px"
        })
        const clash = document.querySelectorAll(".clash-card__image")
        clash.forEach(element => {
            element.style.height = "180" + "px"
        })

        const image_first = document.querySelector(".clash-card__image--barbarian>img")
        image_first.style.width = "320px"
        image_first.style.height = "240px"
        image_first.style.position = "absolute"
        image_first.style.top = "-50" + "px"
        image_first.style.left = "-50" + "px";

        const image_second = document.querySelector(".clash-card__image--archer>img")
        image_second.style.width = "320px"
        image_second.style.height = "240px"
        image_second.style.position = "absolute"
        image_second.style.top = "-30" + "px"
        image_second.style.left = "-30" + "px";

        const image_third = document.querySelector(".clash-card__image--giant>img")
        image_third.style.width = "285px"
        image_third.style.height = "240px"
        image_third.style.position = "absolute"
        image_third.style.top = "-20" + "px"
        image_third.style.left = "-30" + "px"

        const image_fourth = document.querySelector(".clash-card__image--goblin>img")
        image_fourth.style.width = "285px"
        image_fourth.style.height = "240px"
        image_fourth.style.position = "absolute"
        image_fourth.style.top = "-20" + "px"
        image_fourth.style.left = "-20" + "px"

        const image_fifth = document.querySelector(".clash-card__image--wizard>img")
        image_fifth.style.width = "285px"
        image_fifth.style.height = "240px"
        image_fifth.style.position = "absolute"
        image_fifth.style.top = "-20" + "px"
        image_fifth.style.left = "-8" + "px"

        const banner_first = document.querySelector(".clash-card__unit-stats--barbarian")
        banner_first.style.backgroundColor = "#bd7c2f"
        banner_first.style.color = "#fff"

        const banner_second = document.querySelector(".clash-card__unit-stats--archer")
        banner_second.style.backgroundColor = "#d04976"
        banner_second.style.color = "#fff"

        const banner_third = document.querySelector(".clash-card__unit-stats--giant")
        banner_third.style.backgroundColor = "#de7b09"
        banner_third.style.color = "#fff"

        const banner_fourth = document.querySelector(".clash-card__unit-stats--goblin")
        banner_fourth.style.backgroundColor = "#71a32a"
        banner_fourth.style.color = "#fff"


        const banner_fifth = document.querySelector(".clash-card__unit-stats--wizard")
        banner_fifth.style.backgroundColor = "#309eff"
        banner_fifth.style.color = "#fff"

        const training_cost_barbarian = document.querySelector(".clash-card__unit-stats--barbarian>.no-border")
        training_cost_barbarian.style.color = "#fff"

        const training_cost_archer = document.querySelector(".clash-card__unit-stats--archer>.no-border")
        training_cost_archer.style.color = "#fff"

        const training_cost_giant = document.querySelector(".clash-card__unit-stats--giant>.no-border")
        training_cost_giant.style.color = "#fff"

        const training_cost_goblin = document.querySelector(".clash-card__unit-stats--goblin>.no-border")
        training_cost_goblin.style.color = "#fff"

        const training_cost_wizard = document.querySelector(".clash-card__unit-stats--wizard>.no-border")
        training_cost_wizard.style.color = "#fff"

        const border_barbarian = document.querySelector(".clash-card__unit-stats--barbarian>.one-third")
        border_barbarian.style.borderRight = "1px dotted #0d0d0d"

        const border_barbarian_second = document.querySelector(".clash-card__unit-stats--barbarian>.one-third:nth-child(2)")
        border_barbarian_second.style.borderRight = "1px dotted #0d0d0d"

        const border_archer = document.querySelector(".clash-card__unit-stats--archer>.one-third")
        border_archer.style.borderRight = "1px dotted #0d0d0d"

        const border_archer_second = document.querySelector(".clash-card__unit-stats--archer>.one-third:nth-child(2)")
        border_archer_second.style.borderRight = "1px dotted #0d0d0d"

        const border_giant = document.querySelector(".clash-card__unit-stats--giant>.one-third")
        border_giant.style.borderRight = "1px dotted #0d0d0d"

        const border_giant_second = document.querySelector(".clash-card__unit-stats--giant>.one-third:nth-child(2)")
        border_giant_second.style.borderRight = "1px dotted #0d0d0d"

        const border_goblin = document.querySelector(".clash-card__unit-stats--goblin>.one-third")
        border_goblin.style.borderRight = "1px dotted #0d0d0d"

        const border_goblin_second = document.querySelector(".clash-card__unit-stats--goblin>.one-third:nth-child(2)")
        border_goblin_second.style.borderRight = "1px dotted #0d0d0d"

        const border_wizard = document.querySelector(".clash-card__unit-stats--wizard>.one-third")
        border_wizard.style.borderRight = "1px dotted #0d0d0d"

        const border_wizard_second = document.querySelector(".clash-card__unit-stats--wizard>.one-third:nth-child(2)")
        border_wizard_second.style.borderRight = "1px dotted #0d0d0d"

        const archer_name = document.querySelector(".archer>div:nth-child(3)")
        archer_name.innerText = `The Archer`

        const goblin_name = document.querySelector(".goblin>div:nth-child(3)")
        goblin_name.innerText = `The Goblin`
