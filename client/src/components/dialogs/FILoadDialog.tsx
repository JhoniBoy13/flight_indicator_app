import React, {useState} from "react";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {Dialog} from "@headlessui/react";
import "../../asset/FIDialog.css";
import {FlightIndicator} from "../../lib/entities/FlightIndicator";
import {ApiHandler} from "../../lib/ApiHandler";

export function FILoadDialog({open, setOpen, setFlightIndicator}: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, setFlightIndicator: React.Dispatch<React.SetStateAction<FlightIndicator>> }): React.JSX.Element {
    const [id, setId] = useState<string>('');

    const apiHandler: ApiHandler = new ApiHandler();
    const handleClose = ():void => {
        setOpen(false);
        setId('');
    };

    const handleLoad = async ():Promise<void> => {
        try {
            const response:FlightIndicator = await apiHandler.loadFlightIndicator(id);
            setFlightIndicator(response);
            handleClose();
        }
        catch (error) {
            console.error(error);
            handleClose();
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
                        <TextField
                            autoFocus
                            placeholder="Enter ID of the flight indicator you wish to load"
                            required
                            margin="dense"
                            id="flight-indicator-id"
                            name="flight-indicator-id"
                            label="Flight Indicator ID"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
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
