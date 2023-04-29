      let a =  [...document.querySelectorAll(".main__languages>a")]

      document.querySelectorAll(".main__languages>a").forEach(element => {
        if (element.innerText.includes("2.0")){
          document.querySelector(".main__languages").removeChild(element);
        }
      })

      const ip = document.querySelector('input')
      ip.disabled = false;
      ip.setAttribute("value","ineuron")
      const button = document.querySelector('.main__form-btn')
      button.disabled = false;
      button.addEventListener('click', function(){
        a.forEach((element) => (document.querySelector(".main__languages").appendChild(element)));
        button.disabled = true;
      })
