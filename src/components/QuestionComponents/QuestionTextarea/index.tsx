import type { FC } from "react";
import styles from './index.module.scss'

type PropsType = {
    fe_id: string
    props: {
        title: string
        placeholder: string
    }
}

const QuestionTextarea: FC<PropsType> = ({ fe_id, props }) => {
    const { title, placeholder } =  props
    return (
        <>
            <p>{title}</p>
            <div className={styles.textareaWrapper}>
                <textarea name={fe_id} placeholder={placeholder} rows={5} />
            </div>
        </>
    )
}


export default QuestionTextarea
