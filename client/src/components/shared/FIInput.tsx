import React from 'react';
import {TextField} from '@mui/material';

interface InputProps {
    label: string;
    placeholder: string;
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

export function FIInput({label, value, setValue, placeholder}:InputProps): React.JSX.Element {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setValue(parseFloat(event.target.value));
    };

    return (
        <div>
            <TextField
                autoFocus
                placeholder={`please enter ${placeholder}`}
                required
                margin="dense"
                label={label}
                type="number"
                fullWidth
                variant="standard"
                value={value}
                onChange={handleChange}
            />
        </div>

    );
};

