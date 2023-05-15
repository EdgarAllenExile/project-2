import { fabric } from "fabric";

const Rectangle = ( props ) => {
    const { canvas, colour, strokeColour, strokeSize } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'purple'
    if (colour != ""){
        fillColour = colour 
    }

    const _handleAddRect = () => {
        const rect = new fabric.Rect({
        height: 140,
        width: 100,
        fill: fillColour,
        strokeWidth: strokeSize,
        stroke: strokeColour
        });
        canvas.add(rect);
        canvas.renderAll();
    }

    return (
        <>
            <button className="add_button add_rect" onClick={ _handleAddRect } title="Add Rectangle"></button>
        </>
    )
};

export default Rectangle;