import React, {useState, useContext, useEffect} from 'react';
import { LanguageContext } from '../App.tsx';
import {useLocation, useNavigate} from 'react-router-dom';

const LanguageSelect = () => {
    const navigate = useNavigate();
    const { language, setLanguage } = useContext(LanguageContext);
    const [selectedLanguage, setSelectedLanguage] = useState(language);
    const location = useLocation();
    const lang = location.pathname.split('/')[1];
    useEffect(() => {
        setLanguage(lang)
        setSelectedLanguage(lang)
    }, [lang]);
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value;
        setLanguage(newLanguage);
        setSelectedLanguage(newLanguage);
        if(newLanguage!=="en")
        navigate(`/${newLanguage}/home`, { replace: true });
        if(newLanguage==="en"){
            navigate(`/home`, { replace: true });
        }
    };


    return (
        <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="zh">中国人</option>
        </select>
    );

};

export default LanguageSelect;