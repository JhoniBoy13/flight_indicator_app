import React from 'react';
import { FIComposeGraph } from "../components/graphs/FIComposeGraph";
import { FILiquidGauge } from "../components/graphs/FILiquidGauge";
import { FILineBar } from "../components/graphs/FILineBar";
import { FlightIndicator } from "../lib/interfaces/FlightIndicator";
import {PageProps} from "../lib/interfaces/PageProps";

const VisualPage: React.FC<PageProps> = ({ flightIndicator }:{flightIndicator: FlightIndicator}) => {
    return (
        <div className="container">
            <div className="ml-80 d-flex flex-row">
                <div className="col-6">
                    <FILineBar value={flightIndicator.ALT}/>
                    <div className="label">ALT</div>
                </div>
                <div className="col-3">
                    <FIComposeGraph value={flightIndicator.HIS}/>
                    <div className="label">HIS</div>
                </div>
                <div className="col-3">
                    <FILiquidGauge value={flightIndicator.ADI}/>
                    <div className="label">ADI</div>
                </div>
            </div>
        </div>
    );
}
export default VisualPage;
