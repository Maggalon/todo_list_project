import React from 'react';

type Props = {
    lowChecked: boolean;
    normalChecked: boolean;
    highChecked: boolean;
    handleLowChange: any;
    handleNormalChange: any;
    handleHighChange: any;
};

const Priorities = ({
    lowChecked,
    normalChecked,
    highChecked,
    handleLowChange,
    handleNormalChange,
    handleHighChange,
}: Props) => {
    return (
        <>
        <div>
            <h3 className='name_table'>Приоритет</h3>
            <form className='table'>
                <label>
                    <input
                        className='prioretet'
                        type="checkbox" 
                        name="priority" 
                        checked={lowChecked}
                        onChange={handleLowChange} 
                    />
                    Low
                </label>
                <br />
                <label>
                    <input 
                        className='prioretet'
                        type="checkbox" 
                        name="priority" 
                        checked={normalChecked} 
                        onChange={handleNormalChange} 
                    />
                    Normal
                </label>
                <br />
                <label>
                    <input 
                        className='prioretet'
                        type="checkbox" 
                        name="priority" 
                        checked={highChecked} 
                        onChange={handleHighChange} 
                    />
                    High
                </label>
            </form>
        </div>
        </>
    );
};

export default Priorities;
