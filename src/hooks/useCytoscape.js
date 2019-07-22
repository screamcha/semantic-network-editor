import { useEffect, useState } from 'react';

import Cytoscape from 'services/Cytoscape';

const useCytoscape = (container) => {
    const [clickedPosition, setClickedPosition] = useState(null);
    let cy = null;

    const handleTap = event => {
        setClickedPosition(event.position);
    }

    useEffect(() => {
        cy = new Cytoscape(container.current);
        cy.setEvents({
            tap: handleTap,
        })
    }, []);

    return {
        clickedPosition,
    };
}

export default useCytoscape;