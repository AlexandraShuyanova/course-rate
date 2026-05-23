import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}