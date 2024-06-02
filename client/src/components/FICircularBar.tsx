// import React from 'react';
// import {Liquid} from '@ant-design/charts';
//
// export function FICircularBar({adi}: { adi: number }): React.JSX.Element {
//     const percent: number = (adi + 100) / 200;
//
//
//     // const config : LiquidConfig = {
//     //     percent: normalizedAdi,
//     //     width: 450,
//     //     height: 450,
//     //     margin:38,
//     //     style: {
//     //         border: 2,
//     //         distance: 0,
//     //         waveLength: 128,
//     //     }
//     // };
//
//
//     const config = {
//         percent: percent,
//         radius: 0.5,
//         width: 450,
//         height: 450,
//         outline: {
//             border: 4,
//             distance: 8,
//             style: {
//                 stroke: '#C4F1F9',
//                 lineWidth: 4,
//                 opacity: 1,
//             },
//         },
//         wave: {
//             length: 128,
//         },
//         liquidStyle: {
//             fill: '#5B8FF9',
//             stroke: '#5B8FF9',
//         },
//         statistic: {
//             content: {
//                 style: {
//                     fontSize: 20,
//                     fill: '#4B535E',
//                 },
//             },
//         },
//     };
//
//     return <Liquid {...config} />;
// }
//
import * as React from 'react';
import { render } from 'react-dom';
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