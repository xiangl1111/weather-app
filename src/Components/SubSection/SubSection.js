const SubSection = ({
    title,
    children,
}) => (
    <div>
        <div className="text-2xl tracking-widest">{title}</div>
        <div className="mt-4">{children}</div>
    </div>
)

export default SubSection;