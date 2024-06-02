import * as React from 'react';
import { Liquid } from '@ant-design/charts';

const configLiquid = {
    radius: 0.8,
    width: 450,
    height: 450,
    outline: {
        border: 4,
        style: {
            stroke: '#fefbff'
        }
    },
    liquidStyle: () => ({
        fill: '#e700ff',
    }),
};

export function FICircularBar({adi}: { adi: number }): React.JSX.Element {

    const percent: number = (adi + 100) / 200;

    return <Liquid percent={percent} {...configLiquid} />;
}