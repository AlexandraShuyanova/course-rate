import React from "react";
import clsx from 'clsx';
import {TagProps} from './Tag.props';

const styles = {
    ghost: 'inline-flex items-center justify-center py-[2px] px-[10px] h-[23px] font-medium rounded-[20px] border border-[var(--border-color)] bg-transparent text-[var(--black)] cursor-pointer text-[13px]',
    red:  'inline-flex items-center justify-center py-[3px] px-[9px] h-[25px] font-semibold rounded-[20px] bg-[var(--red-dark)] text-[var(--white)] cursor-pointer text-[14px] leading-[14px]',
    grey: 'inline-flex items-center justify-center py-[5px] px-[10px] h-[25px] font-semibold rounded-[20px] bg-[#B3C0D9] text-[var(--white)] cursor-pointer text-[14px] leading-[14px]',
    green: 'inline-flex items-center justify-center py-[6px] px-[9px] h-[23px] font-bold rounded-[20px] bg-[var(--green-light)] text-[var(--green)] cursor-pointer text-[13px]',
    primary: 'inline-flex items-center justify-center py-[3px] px-[9px] h-[22px] font-medium rounded-[20px] bg-transparent border border-[var(--primary)] text-[var(--primary)] cursor-pointer text-[13px] leading-[18px]',
}

export function Tag({ variant='ghost', children, className}: TagProps) {
    return (
        <div className={clsx(styles[variant], className)}>
            {children}
        </div>
    )
}