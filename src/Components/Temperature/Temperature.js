const Temperature =({
    value,
    className,
    loading,
}) => (
    <div className= {className}>
        {loading ? '...': `${value} °`}
    </div>
)

export default Temperature;