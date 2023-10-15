import SubSection from '../../../SubSection';
import City from './components/City';

const OtherCities = () => (
    <SubSection title='Other Cities'>
        <City name='Sydney' temperature={25} weather={{code:'04n',name:'Clouds'}}/>
        <City name='Brisbane' temperature={25}  weather={{code:'10d',name:'Rain'}}/>
        <City name='Perth' temperature={25} weather={{code:'01d',name:'Clear'}}/>
    </SubSection>
)

export default OtherCities;