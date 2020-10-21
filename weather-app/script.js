const key="f8878454624c47538ba162335201910";
const token="c834f2f7b7a9bb85c9d4b2e50ebf553c";
const url="http://api.weatherapi.com/v1/current.json?key="+key+"&q=";
const ipUrl="http://api.ipapi.com/api/check?access_key="+token;
button=document.querySelector("#btn");

button.addEventListener("click",searchCity);
window.onload = displayFirst();

async function displayFirst()
{
        let locContainer=document.querySelector("#location");
        locContainer.classList.add("data");
        let data=await getWeather();
        let locText=document.createElement("h1");
        locText.classList.add("lText");
        locContainer.appendChild(locText);
        let icnDiv=document.createElement("div");
        icnDiv.classList.add("icn");
        let tempDiv=document.createElement("div");
        tempDiv.classList.add("weather");
        locContainer.appendChild(icnDiv);
        locContainer.appendChild(tempDiv);
        fillData(data);

}
function fillData(wData){
    let text=document.querySelector(".lText");
    let icnDivNew=document.querySelector(".icn");
    let tempDivNew=document.querySelector(".weather");
    console.log(wData);
    if(sessionStorage.getItem("city")==undefined)
    {
        text.innerTex="You are currently in "+data.location.name+", "+data.location.region+", "+data.location.country;
    }
    else{
        text.innerText=wData.location.name+", "+wData.location.region+", "+wData.location.country;
    }
    let icnSrcNew=wData.current.condition.icon;
    let icnNew='<img src="'+icnSrcNew+'" width="100px" height="100px"></img>';
    let tempValNew=wData.current.temp_c+"°C";
    icnDivNew.innerHTML=icnNew;
    tempDivNew.innerText=tempValNew;
}

async function searchCity(){
    let cityName=document.querySelector("#name").value;
    sessionStorage.setItem("city",cityName);
    let wData=await getWeather();
    fillData(wData);
}
async function storeCity(){
        let responseIp=await fetch(ipUrl);
        let ipData=await responseIp.json();
        sessionStorage.setItem("city",ipData.city);
        console.log("saving in session");
}
async function getWeather(){
    if(sessionStorage.getItem("city")==undefined)
    {
        await storeCity();
    }
    let weatherUrl=url+sessionStorage.getItem("city");
    let responseWeather=await fetch(weatherUrl);
    let weatherData= await responseWeather.json();
    return weatherData;
}