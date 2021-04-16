// hooks imports
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

// utils imports
import getColor from '../utils/getColor';

const Toolbar = () => {
    // color picker states
    const [toShowPicker, setToShowPicker] = useState(false);

    const {
        red,
        green,
        blue,
        setRed,
        setGreen,
        setBlue,
        buttonColor,
        setButtonColor
    } = useContext(AppContext);

    // component life cycles

    useEffect(() => {
        // generate a new color using the rgb values

        const buttonColor = getColor(
            parseInt(red),
            parseInt(green),
            parseInt(blue)
        );

        setButtonColor(buttonColor);
    }, [red, green, blue, setButtonColor]);

    // Events
    const HandlePickerClick = () => {
        setToShowPicker(!toShowPicker);
    };

    return (
        <div className="container">
            <div className="row mt-5">
                {toShowPicker && (
                    <div className="color-picker">
                        <div className="center">
                            <div className="picker-ranges">
                                <p className="range-field">
                                    <input
                                        type="range"
                                        id="test5"
                                        min="0"
                                        max="255"
                                        value={red}
                                        onChange={e => setRed(e.target.value)}
                                    />
                                </p>

                                <p className="range-field">
                                    <input
                                        type="range"
                                        id="test5"
                                        min="0"
                                        max="255"
                                        value={green}
                                        onChange={e => setGreen(e.target.value)}
                                    />
                                </p>

                                <p className="range-field">
                                    <input
                                        type="range"
                                        id="test5"
                                        min="0"
                                        max="255"
                                        value={blue}
                                        onChange={e => setBlue(e.target.value)}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="toolbar">
                    <div className="toolbar-items">
                        <div
                            className="show-color"
                            style={{ backgroundColor: buttonColor }}
                            onClick={HandlePickerClick}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
