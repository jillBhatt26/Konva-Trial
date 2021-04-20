// konva imports
import { Stage, Layer, Rect, Text } from 'react-konva';

// hooks imports
import { useState, useEffect, useContext, useRef } from 'react';

// context imports
import { AppContext } from '../contexts/AppContext';

// SVG Button
import Button from './Button';

const ImageCanvas = () => {
    // context
    const {
        buttonColor,
        setStage,
        isButtonSelected,
        setIsButtonSelected
    } = useContext(AppContext);

    // component states
    // stage
    const [stageHeight] = useState(window.innerHeight);
    const [stageWidth] = useState(window.innerWidth);
    const [isDraggable, setIsDraggable] = useState(false);

    // stage background image
    const [bgImg, setBgImg] = useState(null);

    // ref
    const stageRef = useRef();
    const buttonRef = useRef();

    // component life cycles

    // componentDidMount useEffect hook to set canvas background image
    useEffect(() => {
        // create a new image
        const img = new Image();

        // give source to the image
        img.src = '/assets/imgCanvas.jpg';

        // set the image in state after it is loaded
        img.addEventListener('load', () => {
            setBgImg(img);
        });
    }, []);

    useEffect(() => {
        const stage = stageRef.current;
        // set the stage
        setStage(stage);
    }, [setStage]);

    // Handle click events from refs
    useEffect(() => {
        const button = buttonRef.current;
        const stage = stageRef.current;

        button.addEventListener(
            'click',
            e => {
                // TODO: set isButtonSelected to true
                e.stopPropagation();
                console.log('button clicked!');
            },
            false // prevent propagation in the bubbling phase
        );

        stage.addEventListener(
            'click',
            e => {
                // TODO: set isButtonSelected to false
                e.stopPropagation();
                console.log('stage clicked!');
            },
            false // prevent propagation in the bubbling phase
        );
    }, []);

    return (
        <div className="container">
            <div className="mt-5">
                <Stage
                    className="stage"
                    width={1300}
                    height={800}
                    ref={stageRef}
                >
                    {/* Background Image */}
                    <Layer>
                        <Rect
                            width={stageWidth}
                            height={stageHeight}
                            fillPatternImage={bgImg}
                        />
                    </Layer>

                    {/* Main Header */}
                    <Layer>
                        <Text
                            fontFamily="Comic Sans MS"
                            fontSize={70}
                            text="Main Header"
                            fill="white"
                            x={50}
                            y={100}
                        />
                    </Layer>

                    {/* Sub Header */}
                    <Layer>
                        <Text
                            fontFamily="Comic Sans MS"
                            fontSize={40}
                            text="Lorem Ipsum dolor sit amet."
                            fill="white"
                            x={50}
                            y={300}
                        />
                    </Layer>

                    {/* Button */}
                    <Layer ref={buttonRef}>
                        <Button
                            buttonColor={buttonColor}
                            onSelect={() => {
                                setIsButtonSelected(!isButtonSelected);
                                setIsDraggable(!isDraggable);
                            }}
                            isButtonSelected={isButtonSelected}
                            isDraggable={isDraggable}
                        />
                    </Layer>

                    <Layer>
                        <Text
                            fontFamily="Comic Sans MS"
                            fontSize={40}
                            text="Book Now"
                            fill="white"
                            x={73}
                            y={530}
                        />
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};

export default ImageCanvas;
