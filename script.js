var inputvalue=document.querySelector('#city');
var btn=document.querySelector('#add');
var city=document.querySelector('#inputcity');
var descrip=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apik="495c670f0a0cf5d33ed9704fe54978f8"
function convertion(val){
    return (val-273).toFixed(3)
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())
    .then(data => {
        var nameval=data['name']
        var descrip=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var windspeed=data['wind']['speed']

        city.innerHTML=`weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${convertion(temperature)} C<span>`
        description.innerHTML=`Sky conditions: <span>${descrip}<span>`
        wind.innerHTML=`wind Speed: <span>${windspeed} km/hr<span>`
    })
    .catch(err=>alert("You entered the wrong city"))
})