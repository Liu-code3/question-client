import type {CSSProperties, FC} from 'react'

type PropsType = {
    text: string
    isCenter: boolean
}

const QuestionParagraph: FC<PropsType> = (props) => {
    const { text, isCenter} = props
    // 样式
    const style: CSSProperties = {
        'textAlign': isCenter ? 'center' : 'left'
    }

    // 换行
    const textList = text.split('\n')

    return <p style={style}>
        {textList.map((t, index) => {
            return <span key={index}>
                {index > 0 && <br />}
                {t}
            </span>
        })}
    </p>
}

export default QuestionParagraph
