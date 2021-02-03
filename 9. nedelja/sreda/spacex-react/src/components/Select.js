const Select = ({ pastLaunches, setYear }) => {
    let years = new Set(pastLaunches.map(launch => launch.date_utc.slice(0, 4)));
    let yearsArr = Array.from(years);

    return (
        <div>
            <select defaultValue={'default'} onChange={(e) => setYear(e.target.value)}>
                <option value='default' disabled>Choose year</option>
                {yearsArr.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
        </div>
    )
}

export default Select
