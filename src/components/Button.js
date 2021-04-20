// konva imports
import { Rect, Transformer } from 'react-konva';

// hooks imports
import { useRef, useEffect } from 'react';

// konva utils imports
// NOTE: Html tag from konva-utils library allows to append HTML DOM elements to a layer on stage.
// import { Html } from 'react-konva-utils';

const Button = ({ buttonColor, onSelect, isButtonSelected, isDraggable }) => {
    // refs
    const transRef = useRef();
    const btnRef = useRef();

    // life cycle events
    useEffect(() => {
        if (isButtonSelected) {
            transRef.current.nodes([btnRef.current]);
            transRef.current.getLayer().batchDraw();
        }
    }, [isButtonSelected]);

    const HandleButtonClick = () => {
        onSelect();
    };

    return (
        <>
            <Rect
                fill={buttonColor}
                width={230}
                height={90}
                x={50}
                y={500}
                onClick={HandleButtonClick}
                ref={btnRef}
                draggable={isDraggable}
                onDragStart={() => console.log('drag start')}
                onDragEnd={() => console.log('drag end')}
            />

            {/* NOTE:
                The usage of the below mentioned SVG tag results in the following errors in the console:

                index.js:1 Konva has no node with the type title. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/title"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html
             */}

            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 185.33 91.33"
                width={230}
                height={90}
                x={10}
                y={500}
                onClick={HandleButtonClick}
                ref={btnRef}
                draggable={isDraggable}
                onDragStart={() => console.log('drag start')}
                onDragEnd={() => console.log('drag end')}
            >
                <title style={{ color: '#fff' }}>Button</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path
                            d="M173.33,91.33H12a12,12,0,0,1-12-12V12A12,12,0,0,1,12,0H173.33a12,12,0,0,1,12,12V79.33A12,12,0,0,1,173.33,91.33Z"
                            style={{ fill: `${buttonColor}` }}
                        />
                    </g>
                </g>
            </svg> */}

            {isButtonSelected && (
                <Transformer
                    ref={transRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        // limit resize
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </>
    );
};

export default Button;
