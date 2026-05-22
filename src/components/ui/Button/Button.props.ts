import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' ;
    children: React.ReactNode;
    className?: string;
    arrow?: 'right' | 'down' | 'none';
}