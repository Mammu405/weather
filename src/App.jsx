import { useState } from 'react';
import './App.css';



function App() {
  let api_key="59f9af77a857b228c37126e47ff3e4af"
  const [temp,setTemp]=useState('Find the weather')
  const [desc,setDesc]=useState('')
  const [feels,setFeels]=useState('')
  const [name,setName]=useState('')
  const [humidity,setHumidity]=useState('')
  const [wind,setWind]=useState('')
  const [min,setMin]=useState('')
  const [max,setMax]=useState('')
  const [icon,setIcon]=useState('https://c4.wallpaperflare.com/wallpaper/980/878/553/few-clouds-sky-wallpaper-preview.jpg')



  const fetchData=async()=>{
    const element=document.getElementsByClassName("cityInput")
    // console.log(element[0].value);

    const base_url=(`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`)
    await fetch(base_url)
    .then(res=>res.json())
    .then(data=>{
      setTemp(Math.floor(data.main.temp)+" ºc")
      setDesc(data.weather[0].description)
      setFeels("Feels like : "+data.main.feels_like+" ºc")
      setHumidity("Humidity : "+data.main.humidity+" %")
      setMin("Min Temp : "+data.main.temp_min)
      setMax("Max Temp : "+data.main.temp_max)
      setWind("Wind speed : "+data.wind.speed+" mph")
      setName(data.name+", "+data.sys.country)

      if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")  {
        setIcon('https://www.softwareheritage.org/wp-content/uploads/2017/12/clearsky.png')
      }else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n") {
        setIcon('https://c4.wallpaperflare.com/wallpaper/980/878/553/few-clouds-sky-wallpaper-preview.jpg')
      }else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n") {
        setIcon('https://media.istockphoto.com/id/645173476/photo/cirrocumulus-clouds-cloudscape.webp?b=1&s=170667a&w=0&k=20&c=g_bYn51s1llK9hhj6gy-QX3c3PyH9Cml2EHG8t5DsHE=')
      }else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n") {
        setIcon('https://images.unsplash.com/photo-1603437873662-dc1f44901825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80')
      }else if(data.weather[0].icon==="010d"||data.weather[0].icon==="010n") {
        setIcon('https://media.istockphoto.com/id/453684353/photo/rain-at-the-fields.jpg?s=612x612&w=0&k=20&c=JXVnwl83Oifw3ook_yhZy9IIeHm2Ey6PrxgZUK1_vZs=')
      }else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n") {
        setIcon('https://img.freepik.com/premium-vector/dense-white-sun-lighted-clouds-producing-pouring-rain-against-blue-sky-background_1284-56866.jpg')
      }else if(data.weather[0].icon==="013d"||data.weather[0].icon==="013n") {
        setIcon('https://images.ctfassets.net/hrltx12pl8hq/5thrWp3Se4mcffFgMORIds/9013edc6afcdfe220a7334eb49d81b9d/snow-images.jpg?fit=fill&w=1200&h=630')
      }else{
        setIcon('https://media.istockphoto.com/id/947314334/photo/blue-sky-with-bright-sun.jpg?s=612x612&w=0&k=20&c=XUlLAWDXBLYdTGIl6g_qHQ9IBBw4fBvkVuvL2dmVXQw=')
    
      }

    })
  }

  return (
    <>
    <div className="App ">
      <body style={{background: 'black'}}>
      <div className="container con" style={{ backgroundImage: `url(${icon})`,   backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', }}>
        <div className="top-bar">
          <input type="text" className='cityInput' placeholder='search' />
          <div className="search-con">
            <button id="btn">
              <img src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" id="img" alt="" onClick={fetchData} />
              </button>
          </div>
          
        </div>
        <div className='mt-1'>
            <p id="name">{name}</p>
          </div>
        <div id="all">
          <div>
            <p id="temp">{temp}</p>
          </div>
          <div id="min">
            <p >{max  }</p>
            <p  >{min  }</p>
          </div>

          <div>
            <p id="desc">{desc}</p>
            <p id="feels">{feels}</p>
            <p id="feels">{humidity}</p>
            <p id="feels">{wind}</p>
          </div>
            
        </div>        
      </div>
      </body>
      
     
    </div>
    </>
  );
}

export default App;
