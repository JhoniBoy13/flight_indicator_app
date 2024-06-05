import React, { useState } from "react";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import { Dialog } from "@headlessui/react";
import { FlightIndicator } from "../../lib/interfaces/FlightIndicator";
import { ApiHandler } from "../../lib/ApiHandler";
import "../../asset/FIDialog.css";
import {FIInput} from "../shared/FIInput";

export function FILoadDialog({ open, setOpen, setFlightIndicator }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, setFlightIndicator: React.Dispatch<React.SetStateAction<FlightIndicator>> }): React.JSX.Element {
    const [id, setId] = useState<number>(undefined);
    const [error, setError] = useState<string>('');

    const apiHandler: ApiHandler = new ApiHandler();

    const handleClose = (): void => {
        setOpen(false);
        setId(undefined);
        setError('');
    };
    const handleLoad = async (): Promise<void> => {
        try {
            const response: FlightIndicator = await apiHandler.loadFlightIndicator(id);
            setFlightIndicator(response);
            handleClose();
        } catch (error) {
            console.error(error);
            setError((error as Error).message);
        }
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} className="dialog-container">
                <div className="dialog-content">
                    <DialogTitle>Load Flight Indicator</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the ID of the flight indicator you wish to load.
                        </DialogContentText>
                        <FIInput label={"Flight Indicator ID"} placeholder={'ID of the flight indicator you wish to load'} setValue={setId}/>
                        { (
                            <DialogContentText style={{ color: 'red' }}>
                                {error}
                            </DialogContentText>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleLoad}>Load</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
