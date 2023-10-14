const BackgroundImage =({
    image,
    children,
}) => (
    <div 
    style={{BackgroundImage: `url(${image})`}}
    className = "bg-cover bg-center">
        {children}
    </div>
)

export default BackgroundImage;