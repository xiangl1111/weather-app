import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';
const Forecast = () =>(
    <SubSection title='Forecast'>
        <div className ="flex gap-4 justify-between">
        <DayOfWeek name="Mon" weather={{code:'01d',name:'Clear'}} temperature={19}/>
        <DayOfWeek name="Tue" weather={{code:'11d',name:'Thunderstorm'}} temperature={15}/>
        <DayOfWeek name="Wed" weather={{code:'09d',name:'Rain'}} temperature={16}/>
        <DayOfWeek name="Thu" weather={{code:'03d',name:'Clouds'}} temperature={18}/>
        <DayOfWeek name="Fri" weather={{code:'01d',name:'Clear'}} temperature={17}/>
        <DayOfWeek name="Sat" weather={{code:'01d',name:'Clear'}} temperature={17}/>
        <DayOfWeek name="Sun" weather={{code:'01d',name:'Clear'}} temperature={17}/>
        </div>
    </SubSection>
)

export default Forecast;