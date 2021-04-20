import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    // button color states
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [buttonColor, setButtonColor] = useState('#000');

    const [isButtonSelected, setIsButtonSelected] = useState(false);

    const [stage, setStage] = useState(null);

    return (
        <AppContext.Provider
            value={{
                red,
                setRed,
                green,
                setGreen,
                blue,
                setBlue,
                buttonColor,
                setButtonColor,
                stage,
                setStage,
                isButtonSelected,
                setIsButtonSelected
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
