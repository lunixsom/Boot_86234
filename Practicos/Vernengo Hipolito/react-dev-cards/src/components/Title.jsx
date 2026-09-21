function Title({title, description}){
    return (
        <div className="title-container">
            <h1 className="title">{title}</h1>
            {description && <p className="description">{description}</p>}
        </div>
    )
}

export default Title;