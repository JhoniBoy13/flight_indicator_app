import React, { useState } from 'react';
import './App.css';
import { FIHeader } from "./components/FIHeader";
import { FILoadDialog } from "./components/dialogs/FILoadDialog";
import { DialogModalStates } from "./lib/interfaces/DialogModalStates";
import { FlightIndicator } from "./lib/interfaces/FlightIndicator";
import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import VisualPage from './pages/VisualPage';
import TextualPage from './pages/TextualPage';
import {FISaveDialog} from "./components/dialogs/FISaveDialog";

function App() {
    const [loadModal, setLoadModal] = useState<boolean>(false);
    const [saveModal, setSaveModal] = useState<boolean>(false);
    const [flightIndicator, setFlightIndicator] = useState<FlightIndicator>({ ALT: 0, HIS: 0, ADI: -100 });

    const dialogModalStates: DialogModalStates = {
        loadModal: { state: loadModal, setState: setLoadModal },
        saveModal: { state: saveModal, setState: setSaveModal }
    };

    return (
        <Router>
            <div className="App">
                <FILoadDialog open={loadModal} setOpen={setLoadModal} setFlightIndicator={setFlightIndicator} />
                <FISaveDialog open={saveModal} setOpen={setSaveModal} setFlightIndicator={setFlightIndicator}  />
                <header className={"App-header"}>
                    <FIHeader dialogModalStates={dialogModalStates} />
                </header>
                <Routes>
                    <Route path="/" element={<Navigate to="/visual" />} />
                    <Route path="/visual" element={<VisualPage flightIndicator={flightIndicator} />} />
                    <Route path="/textual" element={<TextualPage flightIndicator={flightIndicator} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
