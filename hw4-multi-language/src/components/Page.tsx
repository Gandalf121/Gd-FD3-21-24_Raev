import Header from './Header';
import Button from './Button';
import LanguageSelect from './LanguageSelect';
import Message from "./Message.tsx";



const Page = () => {

    return (
        <div style={{"position":"absolute", "left":"50%", "top":"50%", "transform": "translate(-50%, -50%)"}}>
            <Header />
            <p><Message id="paragraph.text" /></p>
            <Button id="button.do-translate" onClick={() => console.log('Button clicked')} />
            <Button id="button.language-switch" onClick={() => console.log('Button clicked')} />
            <LanguageSelect />
        </div>
    );

};


export default Page;