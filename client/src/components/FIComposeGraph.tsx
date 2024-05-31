import React from 'react';
import {
    AnnotationDirective,
    AnnotationsDirective,
    AxesDirective,
    AxisDirective,
    CircularGaugeComponent,
    PointerDirective, PointersDirective
} from "@syncfusion/ej2-react-circulargauge";

export function FIComposeGraph({ degree }: { degree: number }): React.JSX.Element {
    return (
        <div style={{ width: '100%', maxWidth: '500px', height: '500px' }}> {/* Adjust the size of the div */}
            <CircularGaugeComponent
                background={"transparent"}
                width="450px"  /* Adjust width of the gauge */
                height="450px"
                margin={{
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50,
                }}/* Adjust height of the gauge */

            >
                <AxesDirective>
                    <AxisDirective
                        minimum={0}
                        maximum={360}
                        startAngle={0}
                        endAngle={360}
                        lineStyle={{ width: 2, color: 'white' }}
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
                                value={degree} // External pointer at the given degree
                                radius='110%' // Set radius to 100%
                                color='#FF0000'
                                type='Marker'
                                markerShape='InvertedTriangle'
                                markerWidth={15}

                                markerHeight={15}
                                offset={10} // Positive offset to ensure visibility
                            />
                            <PointerDirective
                                value={degree} // External pointer at the given degree
                                radius='95px' // Set radius to 100%
                                color='#FF0000'
                                type='Marker'
                                markerShape='Triangle' // Change to 'Triangle' for pointer shape
                                markerWidth={10} // Thinner arrow
                                markerHeight={95} // Height half the radius (300px / 2 = 150px, radius is 75%)
                                offset={0} // No offset to sit perfectly on the value
                            />
                        </PointersDirective>
                    </AxisDirective>
                </AxesDirective>
            </CircularGaugeComponent>
        </div>
    );
}