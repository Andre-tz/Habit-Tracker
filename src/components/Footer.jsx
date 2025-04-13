import { useTranslation } from "react-i18next";
import "../styles/Footer.css"
//este componente mostrara el footer
const Footer = ( ) =>{
    const { t } = useTranslation();
    return (
        <footer id="footer">
            <p id="question"> { t("footer.question" ) }</p>
            <p id="made-by"> { t( "footer.madeBy" ) }</p>
        </footer>
    )
}

export default Footer;