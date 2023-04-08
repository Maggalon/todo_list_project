const Sorting = (props) => {
    return (
        <>
            <h3>Сортировка</h3>
            <form>
                <label>
                <input type="radio" name="sorting" value='new' checked={props.option === 'new'} onChange={props.handleOptionChange} />
                Новые
                </label>
                <br />
                <label>
                <input type="radio" name="sorting" value='old' checked={props.option === 'old'} onChange={props.handleOptionChange} />
                Старые
                </label>
            </form>
        </>
    )
}

export default Sorting;