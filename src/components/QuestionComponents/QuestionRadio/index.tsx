import type { FC } from 'react'
import styles from './index.module.scss'

type PropsType = {
    fe_id: string
    props: {
        title: string
        options: Array<{
            label: string
            value: string
        }>
        value: string
        isVertical: boolean
    }
}

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
    const { title, options, value, isVertical} = props

    return <>
        <p>{title}</p>
        <ul className={styles.list}>
            {options.map(item => {
                // 判断竖向、 横向
                const className = isVertical ? styles.vertical : styles.horizontalItem
                return <li key={item.value} className={className}>
                    <label htmlFor="">
                        <input type="radio" name={fe_id} value={item.value} defaultChecked={item.value === value} />
                        {item.label}
                    </label>
                </li>
            })}
        </ul>
    </>
}

export default QuestionRadio
