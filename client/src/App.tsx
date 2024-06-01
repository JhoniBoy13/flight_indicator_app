import React from 'react';
import './App.css';
import { FIComposeGraph } from "./components/FIComposeGraph";
import { FICircularBar } from "./components/FICircularBar";
import { FILineBar } from "./components/FILineBar";
import {FIHeader} from "./components/FIHeader";

function App() {
    return (
        <div className="App">
            <header className={"App-header"}>
                <FIHeader />
            </header>
            <div className="container">
                <div className="d-flex flex-row">
                    <div className="col-4">
                        <FIComposeGraph degree={0}/>
                        <div className="label">HIS</div>
                    </div>
                    <div className="col-4">
                        <FICircularBar adi={-50}/>
                        <div className="label">ADI</div>
                    </div>
                    <div className="col-4">
                        <FILineBar value={1000}/>
                        <div className="label">Altitude</div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
