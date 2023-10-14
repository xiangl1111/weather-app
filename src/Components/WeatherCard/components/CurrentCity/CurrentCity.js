import Temperature from "../../../Temperature";
import Weather from "./components/Weather";
import Meta from "./components/Meta";
import Name from "../../../Name"

const CurrentCity= () => (
    <div>
        <Temperature />
        <Weather />
        <Meta />
        <Name />
    </div>
)

export default CurrentCity;