const Elinput = document.querySelector(".form-input");
const Elinputtwoo = document.querySelector(".form-inputtwoo");
const Elinputhree = document.querySelector(".form-inputhree");
const elBtn = document.querySelector(".btn");
 
const ElBoxJavob =document.querySelector(".javob-box");
 
let arr = []


elBtn.addEventListener("click", function (evt){

  evt.preventDefault()
 var ElinputValue = Elinput.value 
 var ElimputtwooValue =Elinputtwoo.value
 var ElinputthreeValue = Elinputhree.value
  
  obj = {
  names:ElinputValue ,
  Realitionship:ElimputtwooValue ,
  tel : ElinputthreeValue 
  }
  arr.push(obj)

  for (const item of arr) {
    
   Elli = document.createElement("li")
  a = document.createElement("h3")
  b =document.createElement("p")
  c = document.createElement("a")
   a.textContent = item.names
   b.textContent = item.Realitionship
   c.textContent = item.tel
 
   c.setAttribute("href" , `tel:+${item.tel}`)
   c.setAttribute("class", "hreft")
   Elli.setAttribute ("class" , "itms")

   Elli.appendChild(a)
   Elli.appendChild(b)
   Elli.appendChild(c)

ElBoxJavob.appendChild(Elli)
}
console.log(arr);

Elinput.value = ""
Elinputtwoo.value = ""
Elinputhree.value = ""
})