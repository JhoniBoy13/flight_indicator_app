import React from 'react';
import {Liquid, LiquidConfig} from '@ant-design/plots';

export function FICircularBar({ adi }: { adi: number }): React.JSX.Element {
    const normalizedAdi: number = (adi + 100) / 200;

    const config : LiquidConfig = {
        percent: normalizedAdi,
        width: 450,
        height: 450,
        margin:38,
        style: {
            border: 2,
            distance: 0,
            waveLength: 128,
        }
    };

    return <Liquid {...config} />;
}

