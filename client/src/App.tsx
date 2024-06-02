import React from 'react';
import './App.css';
import { FIComposeGraph } from "./components/FIComposeGraph";
import { FICircularBar } from "./components/FICircularBar";
import { FILineBar } from "./components/FILineBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <header className="App-header">
                    <div className="d-flex flex-row">
                        <div className="col-4">
                            <FIComposeGraph degree={0}/>
                            <div className="label">HIS</div>
                            {/* Add this line */}
                        </div>
                        <div className="col-4">
                            <FICircularBar adi={90}/>
                            <div className="label">ADI</div>
                            {/* Add this line */}
                        </div>
                        <div className="col-4">
                            <FILineBar value={1000}/>
                            <div className="label">Altitude</div>
                            {/* Ensure this line exists */}
                        </div>
                    </div>
                </header>
            </header>
        </div>
    );
}

export default App;
