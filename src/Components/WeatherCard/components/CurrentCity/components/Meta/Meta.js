import Item from "./components/Item";

const Meta =({
    humidity,
    wind,
    loading,
}) => {
    return(
        <div className="flex gap-8 justify-center mt-8">
          <Item title='HUMIDITY' loading={loading}>{`${humidity} %`}</Item>
        <div className = "w-[1px] bg-white/70"></div>
          <Item title='WIND' loading={loading}>{`${wind} KM/H`}</Item>
        </div>
    )
}

export default Meta;