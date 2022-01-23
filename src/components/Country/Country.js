import React from "react";
import './country.css';
// import CountryList from "../CountryList";

const Country = ({stats}) => {
    return(
            <div className="country">
                <img src={`https://countryflagsapi.com/png/${stats.CountryCode}`} alt={stats.Country}></img>
                <h2>{stats.Country}</h2>
                <div className="describe">
                    <p><b>Active</b> : <span>{stats.Active}</span></p>
                    <p><b>Confirmed</b>: <span>{stats.Confirmed}</span></p>
                    <p><b>Deaths</b>: <span>{stats.Deaths}</span></p>
                    <p><b>Recovered</b>: <span>{stats.Recovered}</span></p>
                </div>
        </div>

    )
}

export default Country