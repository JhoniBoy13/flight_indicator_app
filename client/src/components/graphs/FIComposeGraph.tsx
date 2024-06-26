import React from 'react';
import {AxesDirective, AxisDirective, CircularGaugeComponent, PointerDirective, PointersDirective} from "@syncfusion/ej2-react-circulargauge";

export function FIComposeGraph({value}: { value: number }): React.JSX.Element {
    return (
        <div style={{width: '100%', maxWidth: '470px', height: '450px'}}>
            <CircularGaugeComponent
                background={"transparent"}
                width="450px"
                height="450px"
                margin={{
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50,
                }}
            >
                <AxesDirective>
                    <AxisDirective
                        minimum={0}
                        maximum={360}
                        startAngle={0}
                        endAngle={360}
                        lineStyle={{width: 2, color: 'white'}}
                        majorTicks={{
                            interval: 30,
                            position: 'Inside',
                            height: 10,
                            color: 'white'
                        }}
                        minorTicks={{
                            interval: 6,
                            position: 'Inside',
                            height: 5,
                            color: 'white'
                        }}
                        labelStyle={{
                            position: 'Inside',
                            hiddenLabel: 'First',
                            format: '{value}°',
                            font: {
                                color: 'white',
                                size: '15px',
                                fontWeight: 'Bold'
                            }
                        }}
                    >
                        <PointersDirective>
                            <PointerDirective
                                value={value}
                                radius='105%'
                                color='#00ECFFFF'
                                type='Marker'
                                markerShape='InvertedTriangle'
                                markerWidth={20}

                                markerHeight={20}
                                offset={10}
                            />
                            <PointerDirective
                                value={0}
                                radius='95px'
                                color='#FF0000FF'
                                type='Marker'
                                markerShape='Triangle'
                                markerWidth={10}
                                markerHeight={95}
                                offset={0}
                            />
                        </PointersDirective>
                    </AxisDirective>
                </AxesDirective>
            </CircularGaugeComponent>
        </div>
    );
}