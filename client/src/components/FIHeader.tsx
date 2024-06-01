import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import GraphIcon from '@mui/icons-material/BarChart';
import TextIcon from '@mui/icons-material/TextFields';
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import "../asset/FIHeader.css";

export function FIHeader() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div className={"d-flex justify-content-center m-5 box-s"}>
            <ButtonGroup variant="contained" aria-label="Basic button group" className="buttonGroup m-5">
                <Button variant="outlined" startIcon={<GraphIcon />} className="button">
                    Visual
                </Button>
                <Button variant="outlined" startIcon={<TextIcon />} className="button">
                    Text
                </Button>
                <Button variant="outlined" startIcon={<AddIcon />} className="button">
                    Add
                </Button>
                <Button variant="outlined" startIcon={<CloudDownloadIcon />} className="button">
                    Load
                </Button>
            </ButtonGroup>
        </div>
    );
}
