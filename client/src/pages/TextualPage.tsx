import React from 'react';
import {PageProps} from "../lib/interfaces/PageProps";
import {FlightIndicator} from "../lib/interfaces/FlightIndicator";
import {FICard} from "../components/shared/FICard";
const TextualPage: React.FC<PageProps> = ({flightIndicator}: { flightIndicator: FlightIndicator }) => {
    return (
        <div className="container">
            <div className="d-flex flex-row">
                <div className="col-4">
                    <FICard title={'HIS'} value={flightIndicator.ALT} color={'#00ECFFFF'}/>
                </div>
                <div className="col-4">
                    <FICard title={'ADI'} value={flightIndicator.ALT} color={'#fa14db'}/>
                </div>
                <div className="col-4">
                    <FICard title={'ALT'} value={flightIndicator.ALT} color={'#00FF00'}/>
                </div>
            </div>
        </div>

    );
}

export default TextualPage;
