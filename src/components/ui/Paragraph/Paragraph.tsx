import React from "react";
import clsx from 'clsx';

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    size?: 'large' | 'middle' | 'small';
}

const styles = {
    large: 'text-[18px] leading-[29px] font-normal',
    middle:  'text-[16px] leading-[24px] font-normal',
    small:  'text-[14px] leading-[25px] font-normal',
}

export function Paragraph({ size='small', children, className}: ParagraphProps) {
    return (
        <p className={clsx(styles[size], className)}>
            {children}
        </p>
    )
}