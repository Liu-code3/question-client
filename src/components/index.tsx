
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import QuestionTitle from "@/components/QuestionComponents/QuestionTitle";
import QuestionParagraph from "@/components/QuestionComponents/QuestionParagraph";
import QuestionTextarea from "@/components/QuestionComponents/QuestionTextarea";
import QuestionCheckbox from "@/components/QuestionComponents/QuestionCheckbox";

export type ComponentInfoType = {
    fe_id: string
    type: string
    title: string
    isHidden: boolean
    props: any
}

export const getComponent = (component: ComponentInfoType) => {
    const { fe_id, type, isHidden, props = {} } = component

    const componentMap: {
        [key: string]: JSX.Element
    } = {
        'questionInput': <QuestionInput fe_id={fe_id} props={props}></QuestionInput>,
        'questionRadio': <QuestionRadio fe_id={fe_id} props={props}></QuestionRadio>,
        'questionTitle': <QuestionTitle {...props}></QuestionTitle>,
        'questionParagraph': <QuestionParagraph {...props}></QuestionParagraph>,
        'questionTextarea': <QuestionTextarea fe_id={fe_id} props={props}></QuestionTextarea>,
        'questionCheckbox': <QuestionCheckbox fe_id={fe_id} props={props}></QuestionCheckbox>,
    }


    if(isHidden) return null
    return componentMap[type] ? componentMap[type] : null
}
