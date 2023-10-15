import Item from "./components/Item";

const Meta =() => (
    <div className="flex gap-8 justify-center mt-8">
        <Item title='HUMIDITY'> 86 % </Item>
        <div className = "w-[1px] bg-white/70"></div>
        <Item title='WIND'> 10 KM/H </Item>
    </div>
)

export default Meta;