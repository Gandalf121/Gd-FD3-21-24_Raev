import Message from './Message';


const Header = () => {
    return (
        <header>
            <h1><Message id="title" /></h1>
            <p><Message id="header.welcome" /></p>
        </header>
    );
};


export default Header;