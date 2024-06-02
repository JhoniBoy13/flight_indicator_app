import React, {useState} from 'react';
import './App.css';
import {FIComposeGraph} from "./components/FIComposeGraph";
import {FICircularBar} from "./components/FICircularBar";
import {FILineBar} from "./components/FILineBar";
import {FIHeader} from "./components/FIHeader";
import {FILoadDialog} from "./components/dialogs/FILoadDialog";
import {DialogModalStates} from "./lib/entities/DialogModalStates";
import {FlightIndicator} from "./lib/entities/FlightIndicator";

function App() {

    const [loadModal, setLoadModal] = useState<boolean>(false);
    const [saveModal, setSaveModal] = useState<boolean>(false);

    const [flightIndicator, setFlightIndicator] = useState<FlightIndicator>({ADI: -99, HIS: 0, ALT: 0});

    const dialogModalStates: DialogModalStates = {
        loadModal: {state: loadModal, setState: setLoadModal},
        saveModal: {state: saveModal, setState: setSaveModal}
    };

    return (
        <div className="App">
            <FILoadDialog open={loadModal} setOpen={setLoadModal} flightIndicator={flightIndicator} setFlightIndicator={setFlightIndicator}/>

            <header className={"App-header"}>
                <FIHeader dialogModalStates={dialogModalStates}/>
            </header>
            <div className="container">
                <div className="d-flex flex-row">
                    <div className="col-4">
                        <FIComposeGraph degree={flightIndicator.HIS}/>
                        <div className="label">HIS</div>
                    </div>
                    <div className="col-4">
                        <FICircularBar adi={flightIndicator.ADI}/>
                        <div className="label">ADI</div>
                    </div>
                    <div className="col-4">
                        <FILineBar value={flightIndicator.ALT}/>
                        <div className="label">Altitude</div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
