
export async function currentWeather(city) {
    // const response = await fetch(`http://localhost:5000/api/weather?city=${city}`)
    const response = await fetch(`https://quaint-red-coveralls.cyclic.app/api/weather?city=${city}`)
    const json = await response.json();
    return json;
}
export async function forcast(city) {
    // const response = await fetch(`http://localhost:5000/api/forcast?city=${city}`);
    const response = await fetch(`https://quaint-red-coveralls.cyclic.app/api/forcast?city=${city}`);
    const json = await response.json();
    return json;
}