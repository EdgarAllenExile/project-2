import { fabric } from 'fabric'

const Circle = ( props ) => {

    const { canvas } = props; // destructuring props
    
    const _handleAddCircle = () => {
        const circle = new fabric.Circle({
            radius: 50,
            fill: 'red'
        });
        // console.log(circle); // circle needs radius define
        canvas.add(circle);
        canvas.renderAll();
    };

    return (
        <>
            <button className="add_button add_circle" onClick={ _handleAddCircle }></button>
        </>
    )
};

export default Circle;