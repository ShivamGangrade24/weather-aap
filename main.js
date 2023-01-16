const API_key = 'e47b25db1afc488b97a45806231301'


let form = document.querySelector("form")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let image = document.querySelector("imag")
let container = document.querySelector(".container")
  
  async function getWeather(e){
    e.preventDefault()
   const  res=  await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${input.value}&aqi=yes`) 
  const data =  await res.json()
  const citynamae=(data.location.name)
  const Tepmerature=data.current.temp_c
  const imageUrl  =("https:" +data.current.condition.icon)
        

    h1.innerText =citynamae
    h2.innerText= `${Tepmerature}℃`
    image.setAttribute("src",imageUrl)

  form.reset()
   
}
 
form.addEventListener("submit",getWeather)


