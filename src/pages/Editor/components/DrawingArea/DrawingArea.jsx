import React from 'react';
import useCytoscape from 'hooks/useCytoscape';

import './DrawingArea.scss';

const DrawingArea = () => {
    const areaRef = React.useRef(null);
    const { clickedPosition } = useCytoscape(areaRef);

    return (
        <>
            <div className='drawing-area' ref={areaRef} />
        </>
    );
}

export default DrawingArea;
