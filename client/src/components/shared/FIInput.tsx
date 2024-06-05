import React, {useState} from 'react';
import {TextField} from '@mui/material';

interface InputProps {
    label: string;
    placeholder: string;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

export function FIInput ({label, setValue, placeholder}: InputProps): React.JSX.Element {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue: string = event.target.value;
        if (/^-?\d*$/.test(newValue)) {
            setInputValue(newValue);
            setValue(newValue === '-' ? 0 : parseInt(newValue, 10));
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const key: string = event.key;
        if (!/[0-9-]/.test(key) || (key === '-' && inputValue !== '')) {
            event.preventDefault();
        }
    };

    return (
        <div>
            <TextField
                autoFocus
                placeholder={`please enter ${placeholder}`}
                required
                margin="dense"
                label={label}
                type="text"
                fullWidth
                variant="standard"
                value={inputValue}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
};
