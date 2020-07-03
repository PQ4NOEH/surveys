import React from 'react';
import { ResponsiveLine } from '@nivo/line'



export default function TimelineUserFulfill() {
    return (
        <div style={{height:"20em"}}>
        <ResponsiveLine
        data={data()}
        curve="monotoneX"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    /></div>
    )
}

function data(){
    return [
        {
          "id": "japan",
          "color": "hsl(356, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 162
            },
            {
              "x": "helicopter",
              "y": 52
            },
            {
              "x": "boat",
              "y": 53
            },
            {
              "x": "train",
              "y": 152
            },
            {
              "x": "subway",
              "y": 290
            },
            {
              "x": "bus",
              "y": 66
            },
            {
              "x": "car",
              "y": 11
            },
            {
              "x": "moto",
              "y": 275
            },
            {
              "x": "bicycle",
              "y": 208
            },
            {
              "x": "horse",
              "y": 49
            },
            {
              "x": "skateboard",
              "y": 127
            },
            {
              "x": "others",
              "y": 130
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(146, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 98
            },
            {
              "x": "helicopter",
              "y": 148
            },
            {
              "x": "boat",
              "y": 119
            },
            {
              "x": "train",
              "y": 120
            },
            {
              "x": "subway",
              "y": 202
            },
            {
              "x": "bus",
              "y": 218
            },
            {
              "x": "car",
              "y": 8
            },
            {
              "x": "moto",
              "y": 131
            },
            {
              "x": "bicycle",
              "y": 266
            },
            {
              "x": "horse",
              "y": 257
            },
            {
              "x": "skateboard",
              "y": 154
            },
            {
              "x": "others",
              "y": 0
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(272, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 210
            },
            {
              "x": "helicopter",
              "y": 300
            },
            {
              "x": "boat",
              "y": 238
            },
            {
              "x": "train",
              "y": 132
            },
            {
              "x": "subway",
              "y": 287
            },
            {
              "x": "bus",
              "y": 138
            },
            {
              "x": "car",
              "y": 149
            },
            {
              "x": "moto",
              "y": 237
            },
            {
              "x": "bicycle",
              "y": 130
            },
            {
              "x": "horse",
              "y": 270
            },
            {
              "x": "skateboard",
              "y": 230
            },
            {
              "x": "others",
              "y": 288
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(320, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 134
            },
            {
              "x": "helicopter",
              "y": 141
            },
            {
              "x": "boat",
              "y": 129
            },
            {
              "x": "train",
              "y": 0
            },
            {
              "x": "subway",
              "y": 38
            },
            {
              "x": "bus",
              "y": 32
            },
            {
              "x": "car",
              "y": 46
            },
            {
              "x": "moto",
              "y": 104
            },
            {
              "x": "bicycle",
              "y": 192
            },
            {
              "x": "horse",
              "y": 15
            },
            {
              "x": "skateboard",
              "y": 82
            },
            {
              "x": "others",
              "y": 196
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(124, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 236
            },
            {
              "x": "helicopter",
              "y": 90
            },
            {
              "x": "boat",
              "y": 54
            },
            {
              "x": "train",
              "y": 29
            },
            {
              "x": "subway",
              "y": 77
            },
            {
              "x": "bus",
              "y": 237
            },
            {
              "x": "car",
              "y": 90
            },
            {
              "x": "moto",
              "y": 227
            },
            {
              "x": "bicycle",
              "y": 65
            },
            {
              "x": "horse",
              "y": 60
            },
            {
              "x": "skateboard",
              "y": 140
            },
            {
              "x": "others",
              "y": 253
            }
          ]
        }
      ]
}
