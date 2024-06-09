import React, {useState} from "react";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {Dialog} from "@headlessui/react";
import {FlightIndicator} from "../../lib/interfaces/FlightIndicator";
import {ApiHandler} from "../../lib/ApiHandler";
import "../../asset/FIDialog.css";
import {FIInput} from "../shared/FIInput";

export function FISaveDialog({ open, setOpen, setFlightIndicator }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, setFlightIndicator: React.Dispatch<React.SetStateAction<FlightIndicator>> }): React.JSX.Element {

    const [error, setError] = useState<string>('');
    const [ALT, setALT] = useState<number>();
    const [HIS, setHIS] = useState<number>();
    const [ADI, setADI] = useState<number>();

    const apiHandler: ApiHandler = new ApiHandler();
    const handleClose = (): void => {
        setOpen(false);
        setError('');
        setALT(undefined);
        setHIS(undefined);
        setADI(undefined);
    };

    const handleSave = async (): Promise<void> => {
        try {
            await apiHandler.saveFlightIndicator({ALT,HIS,ADI});
            setFlightIndicator({ALT,HIS,ADI});
            handleClose();
        }
        catch (error) {
            console.error(error);
            setError((error as Error).message);
        }
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose} className="dialog-container">
                <div className="dialog-content">
                    <DialogTitle> Load Flight Indicator </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the flight indicator parameters you wish to save.
                        </DialogContentText>
                        <FIInput label={'ALT'} placeholder={'ALT'}  setValue={setALT}/>
                        <FIInput label={'HIS'} placeholder={'HIS'}  setValue={setHIS}/>
                        <FIInput label={'ADI'} placeholder={'ADI'}  setValue={setADI}/>
                        { (
                            <DialogContentText style={{ color: 'red' }}>
                                {error}
                            </DialogContentText>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
