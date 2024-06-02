export interface DialogModalStates {
    loadModal: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    };
    saveModal: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    };
}