const Elinput = document.querySelector(".form-input");
const Elinputtwoo = document.querySelector(".form-inputtwoo");
const Elinputhree = document.querySelector(".form-inputhree");
const elBtn = document.querySelector(".btn");
 
const ElBoxJavob =document.querySelector(".javob-box");
 


elBtn.addEventListener("click", function (evt){

  evt.preventDefault()
  
  arr = 
  {
  names: Elinput.value ,
  Realitionship: Elinputtwoo.value ,
  tel : Elinputhree.value
  }
  

   Elli = document.createElement("li")
  a = document.createElement("h3")
  b =document.createElement("p")
  c = document.createElement("a")
   a.textContent = arr.names
   b.textContent = arr.Realitionship
   c.textContent = arr.tel
 
   c.setAttribute("href" , `tel:+${arr.tel}`)
   c.setAttribute("class", "hreft")
   Elli.setAttribute ("class" , "itms")

   Elli.appendChild(a)
   Elli.appendChild(b)
   Elli.appendChild(c)

ElBoxJavob.appendChild(Elli)

Elinput.value = ""
Elinputtwoo.value = ""
Elinputhree.value = ""
})