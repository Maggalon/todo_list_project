import React from 'react'

type Props = {
    option: string,
    handleOptionChange: any
}

const Sorting = ({ option, handleOptionChange } : Props) => {
    return (
        <>
            <h3>Сортировка</h3>
            <form>
                <label>
                <input type="radio" name="sorting" value='new' checked={option === 'new'} onChange={handleOptionChange} />
                Новые
                </label>
                <br />
                <label>
                <input type="radio" name="sorting" value='old' checked={option === 'old'} onChange={handleOptionChange} />
                Старые
                </label>
            </form>
        </>
    )
}

export default Sorting;