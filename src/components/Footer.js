// hooks imports
import { useContext } from 'react';

// context imports
import { AppContext } from '../contexts/AppContext';

// utils imports
import download from '../utils/Download';

const Footer = () => {
    // context
    const { stage } = useContext(AppContext);

    // Schedule Post button click event
    const HandlePostClick = () => {
        // generate an image name
        const name = `edited-img-${Date.now()}.png`;

        download(stage, name);
    };

    return (
        <>
            <footer className="group">
                <p>Change Template +</p>
                <button onClick={HandlePostClick}>Schedule Post &gt;</button>
            </footer>
        </>
    );
};

export default Footer;
