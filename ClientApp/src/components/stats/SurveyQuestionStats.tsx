import React from 'react';
import {IFulfilledSurvey, ISurveyQuestion, QuestionType,IMultipleChoiceQuestion} from '../../Types/appTypes';
import {ResponsivePie} from '@nivo/pie'

interface ISurveyQuestionStatsProps{
    question:ISurveyQuestion,
    stats: Array<IFulfilledSurvey>
}
export default function SurveyQuestionStats({
    question,
    stats
}:ISurveyQuestionStatsProps) {
    if(question.type === QuestionType.Text) return null;
    return (
        <div className="mt-3">
            <h3 className="text-center">{question.caption}</h3>
        <div style={{height:"20em"}}>
                <ResponsivePie
        data={data(question as IMultipleChoiceQuestion)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
        </div>
        </div>
    )
}


function data(question : IMultipleChoiceQuestion){
    const valueAndColor = [
        {
            "value": 24,
            "color": "hsl(173, 70%, 50%)"
        },
        {
            "value": 267,
            "color": "hsl(250, 70%, 50%)"
        },
        {
            "value": 39,
            "color": "hsl(190, 70%, 50%)"
        },
        {
            "value": 303,
            "color": "hsl(292, 70%, 50%)"
        },
        {
            "value": 183,
            "color": "hsl(155, 70%, 50%)"
        }
    ];
    return question.options.map((o,i)=>{
        return  {
            "id": o.value,
            "label": o.caption,
            ...valueAndColor[i]
          }
    } )
    
}