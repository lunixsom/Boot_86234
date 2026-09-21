import Title from "./Title";

function Footer({title}){
    return (
        <footer className="footer-container">
            <Title title = {title}/>
        </footer>
    )
}

export default Footer;