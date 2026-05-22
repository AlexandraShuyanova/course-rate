import React from "react";
import clsx from 'clsx';
import type {ButtonProps} from './Button.props';
import ArrowIcon from '@/icons/arrow.svg'

const styles = {
    primary: `
        bg-[var(--primary)]
        text-white
        px-4 py-2
        rounded-[5px]
        cursor-pointer
        text-sm
        font-normal
        leading-none
        text-center
        hover:bg-[#6545E0]
        transition
`,
    ghost: `
    py-[8px] px-[14px]
    border border-[var(--border-color)]
    rounded-[5px]
    bg-transparent
    text-[var(--black)]
    cursor-pointer
    text-sm
    font-normal
    leading-none
    text-center
    hover:bg-[var(--primary)]
    hover:text-white
    transition
    `
}

export function Button({ variant ='primary', children, className, arrow='none', ...props}: ButtonProps) {
    return (
        <button className={clsx(styles[variant], className)}
            {...props}
        >
            <span className={'inline-flex items-center'}>
                {children}

                {arrow === 'right' && <ArrowIcon className={'ml-3'}/>
                }

                {arrow === 'down' && <ArrowIcon/>
                }
            </span>
        </button>
    )
}