import type { FC } from "react";
import type { ComponentInfoType } from "@/components";
import styles from './index.module.scss'
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import {getQuestionInfoById} from "@/service/question";
import { getComponent } from "@/components";


type PropsType = {
    code: number,
    data: {
        _id: string,
        title: string,
        desc?: string,
        js?: string
        css?: string
        isDeleted: boolean
        isPublished: boolean
        componentList: ComponentInfoType[]
    },
    msg: string
}

const Question: FC<PropsType> = (props) => {
    const {
        code,
        data,
        msg
    } = props

    const {
        _id,
        title,
        desc,
        isDeleted,
        isPublished,
        componentList
    } = data || {}

    console.log(props, 'props')

    if(code !== 200) {
        return <PageWrapper title={title} desc={desc}>
            <h1>该问卷不存在</h1>
            <p>{msg}</p>
        </PageWrapper>
    }

    if(isDeleted) {
        return <PageWrapper title={title} desc={desc}>
            <h1>该问卷已删除</h1>
            <p>{msg}</p>
        </PageWrapper>
    }

    if(!isPublished) {
        return <PageWrapper title={title} desc={desc}>
            <h1>该问卷未发布</h1>
            <p>{msg}</p>
        </PageWrapper>
    }

    const componentListEle = <>
        {componentList.map(c => {
            const ComponentEle = getComponent(c)
            return (
                <div key={c.fe_id} className={styles.componentWrapper}>
                    {ComponentEle}
                </div>
            )
        })}
    </>

    return (
        <PageWrapper
            title={title}
            desc={desc}
        >
            <div className={styles.content}>
                <h1>Question page</h1>

                <form action="/api/answer" method="POST">
                    <input type="hidden" name="questionId" value={_id}/>

                    {componentListEle}

                    <div className={styles.submitBtnContainer}>
                        <button type="submit">提交</button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}

export async function getServerSideProps(context: any) {
    const { id } = context.params;

    const questionInfo = await getQuestionInfoById(id)
    return {
        props: {
            ...questionInfo
        }
    }
}

export default Question
