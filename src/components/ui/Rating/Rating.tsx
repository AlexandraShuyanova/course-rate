'use client'
import React, {JSX, useState} from "react";
import StarIcon from '@/icons/star.svg'
import clsx from 'clsx';

interface RatingProps {
    isEditable?: boolean;
    initialRating?: number;
}

export function Rating({ isEditable=false, initialRating = 0, ...props}: RatingProps) {
    const [rating, setRating] = useState(initialRating);
    const [displayRating, setDisplayRating] = useState(initialRating)

    const starClassName = (i: number) =>
        clsx(
            'mr-1 transition-colors',
            {
                'cursor-pointer': isEditable,
                'fill-[var(--primary)]': i < displayRating,
                'fill-[#E2E2E2]-300': i >= displayRating,
            }
        )

    const handleSpace=(i: number, e: KeyboardEvent) => {
        if(e.code != 'Space')
            return;
        setRating(i+1)
        setDisplayRating(i+1)
    }

    return (
        <div {...props}>
            <div className='flex'>
                {[...Array(5)].map((_, i) =>
                    <StarIcon
                        key={i}
                        className={starClassName(i)}
                        onMouseEnter={() => isEditable && setDisplayRating(i + 1)}
                        onMouseLeave={() => isEditable && setDisplayRating(rating)}
                        onClick={() => {
                            if (isEditable) {
                                setRating(i+1)
                                setDisplayRating(i+1)
                            }
                        }}
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent )=> isEditable && handleSpace(i, e)}
                    />)}
            </div>
        </div>
    )
}