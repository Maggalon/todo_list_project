import React from 'react';

type Props = {
    option: string;
    handleOptionChange: any;
};

const Sorting = ({ option, handleOptionChange }: Props) => {
    return (
        <>
        <div>
            <h3 className='name_table'>Сортировка</h3>
            <form className='table'>
                <label>
                    <input
                        className='sort_name'
                        type="radio"
                        name="sorting"
                        value="new"
                        checked={option === 'new'}
                        onChange={handleOptionChange}
                    />
                    Новые
                </label>
                <br />
                <label>
                    <input
                        className='sort_name'
                        type="radio"
                        name="sorting"
                        value="old"
                        checked={option === 'old'}
                        onChange={handleOptionChange}
                    />
                    Старые
                </label>
            </form>
        </div>
        </>
    );
};

export default Sorting;
