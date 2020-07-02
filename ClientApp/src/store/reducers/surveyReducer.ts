import {ISurvey,QuestionType} from '../../Types/appTypes'
const mockSurvey: ISurvey = {
    id: 122,
    name: "Compliance for MQC",
    sections:[
        {
            id: 1,
            name: "First part",
            position: 1,
            questions:[
                {
                    id:12,
                    type: QuestionType.Text,
                    position:1,
                    caption: "Tell us what do you think"
                },
                {
                    id:13,
                    type: QuestionType.MultipleChoice,
                    position:2,
                    caption: "Please select all that match",
                    options:["I'm super intelligent","I'm always right","I deserve a better job","I want to keep working here"].map((s,i)=> ({
                        caption:s,
                        value: i,
                        position:i
                    }))
                },
                {
                    id:14,
                    type: QuestionType.ChooseOne,
                    position:3,
                    caption: "Choose one",
                    options:["Bad","Regular","Good","Very Good", "Impressive"].map((s,i)=> ({
                        caption:s,
                        value: i,
                        position:i
                    }))
                }
            ]
        }
    ]
}
export default function reducer(state=mockSurvey, action:any){
    return state;
}