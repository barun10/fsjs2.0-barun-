    const logo = document.createElement('img');
    logo.setAttribute('src', '/assets/ineuron-logo.png')
    logo.setAttribute('alt', 'ineuron')
    const header = document.querySelector("header")
    header.appendChild(logo)
    const prev_logo = document.querySelector("header>.logo")
    header.removeChild(prev_logo)

    const whole_body = document.querySelector("body")
    whole_body.style.backgroundSize = '1600px 2000px'
    whole_body.style.backgroundRepeat = 'no-repeat'

    document.querySelector("html").style.backgroundSize = '1600px 2000px'
    document.querySelector("html").style.backgroundRepeat = 'no-repeat'
    document.querySelector(".hero>h1").style.fontSize = '84px'
    document.querySelector("header>img").style.width = '38%'
    document.querySelector(".hero>p").style.fontSize = '0.9em'
    document.querySelector(".hero>p").style.marginRight = '84px'
    document.querySelector(".top_img>img").style.width = '260px'
    document.querySelector(".top_img>img").style.hieght = '160px'
    document.querySelector(".top_img>img").style.position = 'absolute'
    document.querySelector(".top_img>img").style.left = '-200px'

    document.querySelector(".app_price>span").innerText = '$10'

    const linkedin_div = document.createElement('div')
    linkedin_div.setAttribute ('class', 'footer_social_ico')
    const linkedin_icon = document.createElement('i')
    linkedin_icon.setAttribute ('class', 'fa-brands fa-linkedin')
    document.querySelector('.footer_social').appendChild(linkedin_div)
    linkedin_div.appendChild(linkedin_icon)
