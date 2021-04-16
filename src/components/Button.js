// konva imports
import { Rect, Transformer } from 'react-konva';

// hooks imports
import { useRef, useEffect } from 'react';

const Button = ({ buttonColor, onSelect, isSelected }) => {
    // refs
    const transRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
        if (isSelected) {
            transRef.current.nodes([btnRef.current]);
            transRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
            <Rect
                fill={buttonColor}
                width={230}
                height={90}
                x={50}
                y={500}
                onClick={onSelect}
                ref={btnRef}
            />

            {isSelected && (
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
