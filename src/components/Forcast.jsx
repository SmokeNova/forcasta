
function Forcast({ info }) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div>
            <h2 className='text-2xl font-bold tracking-wide'>3-Day Forcast</h2>
            <div className='flex gap-3 mt-4 w-full justify-evenly flex-wrap'>
                {info.forecast.forecastday.map((day, idx) => (
                    <div className='w-[12%] min-w-[128px] bg-white flex flex-col rounded-xl px-6 pt-1 pb-5 flex-wrap' key={idx}>
                        <p className='text-base font-bold mt-3 self-center'>
                            {days[new Date(day.date).getDay()]}
                        </p>
                        <img className="mt-2" src={day.day.condition.icon} alt={day.day.condition.text} />
                        <p className='text-base font-bold mt-3 self-center'>
                            {Math.round(day.day.avgtemp_c)}&deg;C
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Forcast