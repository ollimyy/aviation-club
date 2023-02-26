import c152 from '../images/c152.jpg'
import c172 from '../images/c172.jpg'

function AircraftList() {
    const fleet = [
        {
            registration: 'OH-CAB',
            type: 'Cessna 152',
            rentPrice: 120,
            image: c152
        },
        {
            registration: 'OH-CYZ',
            type: 'Cessna 172',
            rentPrice: 160,
            image: c172
        }
    ];

    return (
        <div>
            <h2>Our aircraft:</h2>
            { fleet.map( aircraft => {
                return (
                    <div>
                        <h3>{ aircraft.registration }</h3>
                        <img src={aircraft.image} alt="Cessna airplane" />
                        <table>
                            <tr>
                                <th>registration:</th>
                                <tr>{ aircraft.registration }</tr>
                            </tr>
                            <tr>
                                <th>type:</th>
                                <tr>{ aircraft.type }</tr>
                            </tr>
                            <tr>
                                <th>rent price:</th>
                                <tr>{ aircraft.rentPrice } e/h ({ (aircraft.rentPrice / 60.00).toFixed(2) } e/min)</tr>
                            </tr>
                        </table>
                    </div>
                )
            })
        }
        <p>Rent price is calculated by minutes of air time. Fuel, landing fees and taxi time are included. </p>
        </div>
    )
}

export default AircraftList;