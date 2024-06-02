import * as React from 'react';
import {Liquid} from '@ant-design/charts';

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
        fill: '#fa14db',
    }),
};

export function FILiquidGauge({value}: { value: number }): React.JSX.Element {

    const [percent, setPercent] = React.useState<number>(0.01);

    React.useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() : void => {
            setPercent((value + 100) / 200);
        }, 100);

        return () => clearTimeout(timer);
    }, [value]);

    return <Liquid percent={percent} {...configLiquid} />;
}