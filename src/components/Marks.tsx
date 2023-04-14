import React from 'react';

type Props = {
    designChecked: boolean;
    developmentChecked: boolean;
    researchChecked: boolean;
    handleDesignChange: any;
    handleDevelopmentChange: any;
    handleResearchChange: any;
};

const Marks = ({
    designChecked,
    developmentChecked,
    researchChecked,
    handleDesignChange,
    handleDevelopmentChange,
    handleResearchChange,
}: Props) => {
    return (
        <div>
            <h3 className='name_table'>Отметки</h3>
            <form className='table'>
                <label>
                    <input 
                        className='mark' 
                        type="checkbox" 
                        name="marks" 
                        checked={designChecked} 
                        onChange={handleDesignChange} 
                    />
                    Design
                </label>
                <br />
                <label>
                    <input
                        className='mark' 
                        type="checkbox"
                        name="marks"
                        checked={developmentChecked}
                        onChange={handleDevelopmentChange}
                    />
                    Development
                </label>
                <br />
                <label>
                    <input
                        className='mark' 
                        type="checkbox"
                        name="marks" 
                        checked={researchChecked} 
                        onChange={handleResearchChange} 
                    />
                    Research
                </label>
            </form>
        </div>
    );
};

export default Marks;
