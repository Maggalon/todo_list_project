const Priorities = (props) => {
    return (
        <>
            <h3>Приоритет</h3>
            <form>
                <label>
                <input type="checkbox" name="priority" checked={props.lowChecked} onChange={props.handleLowChange} />
                Low
                </label>
                <br />
                <label>
                <input type="checkbox" name="priority" checked={props.normalChecked} onChange={props.handleNormalChange} />
                Normal
                </label>
                <br />
                <label>
                <input type="checkbox" name="priority" checked={props.highChecked} onChange={props.handleHighChange} />
                High
                </label>
            </form>
        </>
    )
}

export default Priorities;