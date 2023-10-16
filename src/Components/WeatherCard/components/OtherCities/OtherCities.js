import SubSection from '../../../SubSection';
import City from './components/City';
import group from '../../../../apis/group'
import { useEffect, useState } from 'react';

const OtherCities = ({
    onCityClick,
}) => {
    const [others, setOthers] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        group()
        .then((data) => {
            const list = data.list.map(({ name, main, weather,coord}) => ({
                name,
                temperature: Number.parseInt(main.temp),
                lon: coord.lon,
                lat: coord.lat,
                weather: {
                    code: weather[0].icon,
                    name: weather[0].main,
            },
            }))
            setOthers(list)
        })
        .finally(() => setLoading(false))
    },[])

    return(
        <SubSection title='Other Cities'>
            {loading && <div>Loading...</div>}
            {others?.map(({ name,temperature, weather,lat,lon}) => (
                <City 
                key= {name}
                name={name} 
                temperature={temperature} 
                weather={weather}
                onClick={()=> onCityClick({name,lat,lon})}
                />
            ))}
    </SubSection>
    )
}

export default OtherCities;