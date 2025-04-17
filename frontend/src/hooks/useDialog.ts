import { useCallback, useState } from "react";

const useDialog = (value: boolean = false) => {
    const [isOpen, setIsOpen] = useState<boolean>(value);

    const openDialog = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const closeDialog = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    return {
        isOpen,
        openDialog,
        closeDialog,
    };
};

export default useDialog;
