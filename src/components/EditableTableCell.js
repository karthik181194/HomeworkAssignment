import React, { useState } from 'react';

const EditableTableCell = ({ value }) => {
    const [isInputVisible, setIsInputValueVisible] = useState(false);
    const [inputValue, setInputValue] = useState(value)
    const handleClick = (e) => {
        if (!isInputVisible) {
            setIsInputValueVisible(true);
        }
    };
    function handleSubmit(e) {
        setIsInputValueVisible(false);
    }
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    return (
        <td
            onDoubleClick={handleClick}
            className={isInputVisible ? 'input-visible' : ''}
        >
            {isInputVisible ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        className='w-100'
                    />
                </form>
            ) : (
                <a href={inputValue} onClick={(e) => e.stopPropagation()} rel="noreferrer" target="_blank">{inputValue}</a>
            )}
        </td>
    );
};

export default EditableTableCell;