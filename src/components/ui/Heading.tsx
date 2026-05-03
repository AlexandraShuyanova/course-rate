import React from "react";
import clsx from 'clsx';

type HeadingProps = {
    level?: 'h1' | 'h2' | 'h3' | 'h4';
    children: React.ReactNode;
    className?: string;
}

const styles = {
    h1: 'text-[26px] font-medium leading-none',
    h2:  'text-[22px] font-medium leading-none',
    h3:  'text-[20px] font-semibold leading-none',
    h4: 'text-[20px] font-bold leading-none'
}

export function Heading({ level='h1', children, className}: HeadingProps) {

    const Tag= level;
    return (
        <Tag className={clsx(styles[level], className)}>
            {children}
        </Tag>
    )
}