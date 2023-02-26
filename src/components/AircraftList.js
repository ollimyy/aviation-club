
function AircraftList() {
    const fleet = [
        {
            registration: "OH-CAB",
            type: "Cessna 152",
            rentPrice: 120
        },
        {
            registration: "OH-CYZ",
            type: "Cessna 172",
            rentPrice: 160
        }
    ];

    return (
        <div>
            <h2>Our aircraft:</h2>
            { fleet.map( aircraft => {
                return (
                    <div>
                        <h3>{ aircraft.registration }</h3>
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
                                <tr>{ aircraft.rentPrice }</tr>
                            </tr>
                        </table>
                    </div>
                )
            })
        }
        </div>
    )
}

export default AircraftList;