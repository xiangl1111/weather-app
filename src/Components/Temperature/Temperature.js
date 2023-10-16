const Temperature =({
    temperature,
    className,
    loading,
}) => (
    <div className= {className}>
        {loading ? '...': `${temperature} °`}
    </div>
)

export default Temperature;