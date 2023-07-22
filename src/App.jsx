import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import { currentWeather, forcast } from './components/FetchWeather'
import Highlights from './components/Highlights'
import Forcast from './components/Forcast'

function App() {
  try {
  const [city, setCity] = useState('london');
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});


  useEffect(() => {
    currentWeather(city)
      .then((json) => setData(json));
    forcast(city)
      .then((json) => setInfo(json))
    setCity('');
    return;
  }, []);




  function handleSubmit(e) {
    e.preventDefault();
    currentWeather(city)
      .then((json) => setData(json));
    forcast(city)
      .then((json) => setInfo(json))
    setCity('');
    return;
  };

  if (data.error) {
    console.clear();
    return (
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <p className='text-xl font-bold block'>Something went wrong!</p>
        <p className='text-xl font-bold block'>Following error occured:-{data.error.message}</p>
        <p className='text-xl font-bold block'>Reload the page</p>
      </div>
    )
  }

  if (!data.current || !info.current) {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <p className='text-xl font-bold block'>loading...</p>
        <p className='text-xl font-bold'>Reload the page if this takes more than a few seconds</p>
      </div>
    )
  }

  return (
    <>
      <div id="cont" className='mb-10 mt-2 mx-3 md:mx-7'>
        <h1 className='heading tracking-wider mb-5 text-4xl text-center leading-normal font-bold'> FORCASTA </h1>
        <form className='flex justify-center rounded-xl' onSubmit={handleSubmit}>
          <label className='md:w-[30%] rounded-md'>
            <input type="text" placeholder="Search for places..." className="w-full px-3 py-2 border rounded-md border-blue-600 outline-none bg-white text-black" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
        </form>
        <section className="container w-full">
          <div className="main w-full bg-transparent flex flex-col mt-7 gap-7">
            <Weather data={data} />
            <Highlights data={data} />
            <Forcast info={info} />
          </div>
        </section>
      </div>
    </>
  )
  } catch(err) {
    console.clear();
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <p className='text-xl font-bold'>Something went wrong</p>
      </div>
    )
  }
}

export default App
