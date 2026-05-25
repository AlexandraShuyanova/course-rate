import React from "react";
import clsx from 'clsx';
import ArrowIcon from '@/icons/arrow.svg'

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' ;
    children: React.ReactNode;
    className?: string;
    arrow?: 'right' | 'down' | 'none';
}

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

                {arrow !== 'none' &&
                    <ArrowIcon className={clsx(
                        'ml-3',
                        {
                            'rotate-90': arrow === 'down',
                        }
                    )}
                    />
                }
            </span>
        </button>
    )
}