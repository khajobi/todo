import { IconButton } from "@mui/material";

import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material/SvgIcon";

type ActionIconButtonProps = {
    iconComponent: SvgIconComponent;
    color: SvgIconProps["color"];
    onClick: () => void;
};

const ActionIconButton = (props: ActionIconButtonProps) => {
    return (
        <IconButton onClick={props.onClick}>
            <props.iconComponent color={props.color} />
        </IconButton>
    );
};

export default ActionIconButton;
