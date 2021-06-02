import { memo } from 'react';
import { Twitter, GitHub, Instagram, Mail, Send } from 'react-feather';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return ( <
        footer >
        <
        div className = "link" >
        <
        a href = "mailto:vedant.vnk@gmail.com"
        target = "_blank"
        rel = "noopener noreferrer" >
        Vedant <
        /a> < /
        div >

        <
        h5 > { t('We stand with everyone fighting on the frontlines') } < /h5>

        <
        div className = "links" >
        <
        a href = "https://github.com/"
        className = "github"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        GitHub / >
        <
        /a>

        <
        a href = "https://t.me/"
        className = "telegram"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        Send / >
        <
        /a>

        <
        a href = "https://twitter.com/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "twitter" >
        <
        Twitter / >
        <
        /a>

        <
        a href = "https://instagram.com/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "instagram" >
        <
        Instagram / >
        <
        /a>

        <
        a href = "mailto:vedant.vnk@gmail.com"
        className = "mail"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        Mail / >
        <
        /a> < /
        div > <
        /footer>
    );
}

export default memo(Footer);
