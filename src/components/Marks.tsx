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
        <>
            <h3>Отметки</h3>
            <form>
                <label>
                    <input type="checkbox" name="marks" checked={designChecked} onChange={handleDesignChange} />
                    Design
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="marks"
                        checked={developmentChecked}
                        onChange={handleDevelopmentChange}
                    />
                    Development
                </label>
                <br />
                <label>
                    <input type="checkbox" name="marks" checked={researchChecked} onChange={handleResearchChange} />
                    Research
                </label>
            </form>
        </>
    );
};

export default Marks;
