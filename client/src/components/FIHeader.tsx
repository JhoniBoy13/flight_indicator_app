import React from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";
import GraphIcon from '@mui/icons-material/BarChart';
import TextIcon from '@mui/icons-material/TextFields';
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { DialogModalStates } from "../lib/interfaces/DialogModalStates";
import "../asset/FIHeader.css";

export function FIHeader({ dialogModalStates }: { dialogModalStates: DialogModalStates }): React.JSX.Element {

    const navigate : NavigateFunction = useNavigate();

    const handleVisualButtonClick = () : void => {
        navigate("/visual");
    };

    const handleTextButtonClick = () : void => {
        navigate("/textual");
    };

    const handleAddButtonClick = () : void => {
        dialogModalStates.saveModal.setState(true);
    };

    const handleLoadButtonClick = () : void => {
        dialogModalStates.loadModal.setState(true);
    };

    return (
        <div className={"d-flex justify-content-center m-5 box-s"}>
            <ButtonGroup variant="contained" aria-label="Basic button group" className="buttonGroup m-5">
                <Button variant="outlined" startIcon={<GraphIcon />} className="button" onClick={handleVisualButtonClick}>
                    Visual
                </Button>
                <Button variant="outlined" startIcon={<TextIcon />} className="button" onClick={handleTextButtonClick}>
                    Text
                </Button>
                <Button variant="outlined" startIcon={<AddIcon />} className="button" onClick={handleAddButtonClick}>
                    Add
                </Button>
                <Button variant="outlined" startIcon={<CloudDownloadIcon />} className="button" onClick={handleLoadButtonClick}>
                    Load
                </Button>
            </ButtonGroup>
        </div>
    );
}
