
function Highlights({ data }) {
    const highlights = [
        { title: 'Wind Status', content: data.current.wind_kph },
        { title: 'UV Index', content: data.current.uv },
        { title: 'Humidity', content: data.current.humidity },
        { title: 'Visibility', content: data.current.vis_km },
    ]
    return (
        <div>
            <h2 className='text-2xl font-bold tracking-wide'>Today's highlights</h2>
            <div className='flex gap-3 mt-4 w-full justify-evenly flex-wrap'>
                {highlights.map((highlight, idx) => (
                    <div className='w-[20%] min-w-[216px] bg-white flex flex-col rounded-xl px-6 pt-4 pb-7 flex-wrap' key={idx}>
                        <h3 className='text-lg tracking-wide font-bold pl-4 text-slate-500'>{highlight.title}</h3>
                        <p className='self-center text-5xl leading-normal'>
                            {highlight.content}
                            {highlight.title === 'Wind Status' && (<span className='text-2xl'>km/h</span>)}
                            {highlight.title === 'Humidity' && (<span className='text-2xl'>%</span>)}
                            {highlight.title === 'Visibility' && (<span className='text-2xl'>km</span>)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Highlights