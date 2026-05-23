import React from "react";

export interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    size?: 'large' | 'middle' | 'small';
}