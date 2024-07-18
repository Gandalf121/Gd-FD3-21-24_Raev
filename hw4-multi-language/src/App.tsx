import { useState, createContext } from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Page from './components/Page';
import zh from './i18n/zh.ts';
import ru from './i18n/ru';
import en from './i18n/en';
import ErrorPage from "./components/ErrorPage.tsx";


interface LanguageContext {
    language: string;
    translations: { [key: string]: string };
    setLanguage: (language: string) => void;
}


export const LanguageContext = createContext<LanguageContext>({
    language: 'en',
    translations: en,
    setLanguage: () => {}
});


const App = () => {
    const [language, setLanguage] = useState('en');
    const translations = language === 'en' ? en : language === 'ru' ? ru : language === 'zh'? zh : en;

    return (
        <LanguageContext.Provider value={{ language, translations, setLanguage }}>
               <BrowserRouter>
                   <Routes>
                       <Route path="/">
                           <Route path="ru/home" element={<Page />} />
                           <Route path="zh/home" element={<Page />} />
                           <Route path="home" element={<Page />} />
                       </Route>
                       <Route path="*" element={<ErrorPage />} />
                   </Routes>
               </BrowserRouter>

        </LanguageContext.Provider>
    );
};


export default App;