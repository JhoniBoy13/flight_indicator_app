import React from 'react';
import '../../asset/FICard.css';

interface CardProps {
    title: string;
    value: number;
    color: string;
}

export function FICard({ title, value, color }: CardProps): JSX.Element {
    return (
        <div className="card" style={{backgroundColor: color}}>
            <div className="card-top">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="card-bottom">
                <p className="card-value">{value}</p>
            </div>
        </div>
    );
}
