import { useTranslation } from "react-i18next";

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