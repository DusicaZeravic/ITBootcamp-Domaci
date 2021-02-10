import Launch from './Launch';
const Launches = ({ launches, year }) => {

    let filteredLaunches = launches.filter(launch => launch.date_utc.slice(0, 4) === year);

    return (
        <div>
            {year === '' ?
                launches.map(launch => <Launch key={launch.id} name={launch.name} date={launch.date_utc.slice(0, 4)} img={launch.links.patch.small} />)
                :
                filteredLaunches.map(launch => <Launch key={launch.id} name={launch.name} date={launch.date_utc.slice(0, 4)} img={launch.links.patch.small} />)
                

            }
        </div>
    )
}

export default Launches
