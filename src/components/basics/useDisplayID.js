import { useState } from 'react';

const useDisplayID = () => {
    const [displayText, setDisplayText] = useState();

    const handleButtonClick = (buttonId) => {
        setDisplayText(buttonId);
    };

    return {
        displayText,
        handleButtonClick,
    };
};

export default useDisplayID;
