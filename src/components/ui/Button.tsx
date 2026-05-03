import React from "react";
import clsx from 'clsx';

type ButtonProps = {
    variant?: 'primary' | 'ghost' ;
    children: React.ReactNode;
    className?: string;
}

const styles = {
    primary: 'bg-[var(--primary)] text-white px-4 py-2 rounded-[5px] cursor-pointer text-sm font-normal leading-none text-center',
    ghost: 'px-4 py-2 border border-[var(--border-color)] rounded-[5px] bg-transparent text-[var(--black)] cursor-pointer text-sm font-normal leading-none text-center',
}

export function Button({ variant ='primary', children, className}: ButtonProps) {
    return (
        <button className={clsx(styles[variant], className)}>
            {children}
        </button>
    )
}