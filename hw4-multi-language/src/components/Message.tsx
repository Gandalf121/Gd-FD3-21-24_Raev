import { useContext } from 'react';
import { LanguageContext } from '../App';


const Message = ({ id }: { id: string }) => {
    const { translations } = useContext(LanguageContext);
    return <span>{translations[id]}</span>;
};

export default Message;