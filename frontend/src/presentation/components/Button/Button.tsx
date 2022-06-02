import MuiButton from "@mui/material/Button";
import * as React from "react";
export interface ButtonProps {
	color?: "primary";

	/** O texto do botão */
	label?: string;

	onClick?: () => void;
}

export const Button = ({ color = "primary", label }: ButtonProps) => {
	return <MuiButton color={color}> {label} </MuiButton>;
};
