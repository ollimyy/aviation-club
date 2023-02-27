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
            <h2>Our aircraft</h2>
            { fleet.map( aircraft => {
                return (
                    <div key={ aircraft.registration }>
                        <h3>{ aircraft.registration }</h3>
                        <img src={aircraft.image} alt="Cessna airplane" />
                        <table>
                            <tbody>
                                <tr>
                                    <th>registration:</th>
                                    <td>{ aircraft.registration }</td>
                                </tr>
                                <tr>
                                    <th>type:</th>
                                    <td>{ aircraft.type }</td>
                                </tr>
                                <tr>
                                    <th>rent price:</th>
                                    <td>{ aircraft.rentPrice } e/h ({ (aircraft.rentPrice / 60.00).toFixed(2) } e/min)</td>
                                </tr>
                            </tbody>
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