import Title from "./Title";

function Header({title}){
    return (
        <header className="header-container">
            <Title title = {title}/>
        </header>
    )
}

export default Header;