import Temperature from "../../../Temperature";
import Weather from "./components/Weather";
import Meta from "./components/Meta";
import Name from "../../../Name"
import BackgroundImage from "../../../BackgroundImage"
import bg from "./assets/bg-current-city.jpg"

const CurrentCity = ({
    name,
    current,
    loading
}) => (<BackgroundImage image={bg}>
        <div className="flex justify-between py-16 px-24 gap-48 relative">
            <div>
                <Temperature className = "text-white text-7xl text-center min-w-[300px]"
                temperature={current?.temp}
                loading={loading}
                />
                <Weather 
                weather = {current?.weather[0].main}
                loading = {loading}/>
                <Meta 
                humidity={current?.humidity}
                wind={current?.wind_speed}
                loading={loading}/>
            </div>
            <Name> {name} </Name>
            <div className="h-[25px] bg-black/60 absolute bottom-0 inset-x-0"></div>
        </div>
    </BackgroundImage>
)

export default CurrentCity;