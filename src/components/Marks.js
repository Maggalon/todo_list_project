const Marks = (props) => {
    return (
        <>
            <h3>Отметки</h3>
            <form>
                <label>
                <input type="checkbox" name="marks" checked={props.designChecked} onChange={props.handleDesignChange} />
                Design
                </label>
                <br />
                <label>
                <input type="checkbox" name="marks" checked={props.developmentChecked} onChange={props.handleDevelopmentChange} />
                Development
                </label>
                <br />
                <label>
                <input type="checkbox" name="marks" checked={props.researchChecked} onChange={props.handleResearchChange} />
                Research
                </label>
            </form>
        </>
    )
}

export default Marks;