import {FC, useEffect, useState} from 'react'
import styles from './index.module.scss'
import {it} from "node:test";

type PropsType = {
    fe_id: string
    props: {
        title: string
        isVertical?: boolean
        list:  Array<{
            value: string
            label: string
            checked: boolean
        }>
    }
}

const QuestionTitle: FC<PropsType> = ({ fe_id, props}) => {
    const { title, isVertical, list = []} = props

    const [selectedValues, setSelectedValues] = useState<string[]>([])
    function toggleChecked(value: string) {
        if(selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter(v => v !== value))
        } else {
            setSelectedValues([...selectedValues, value])
        }
    }

    useEffect(() => {
        list.forEach(item => {
            const { value, checked } = item
            if(checked) {
                setSelectedValues([...selectedValues, value])
            }
        })
    }, [list, setSelectedValues]);


    const className = isVertical ? styles.verticalItem : styles.horizontalItem
    return <>
        <p>{title}</p>
        <input type="hidden" name={fe_id} value={selectedValues.join(',')} />
        <ul className={styles.list}>
            {list.map(item => {
                return <li key={item.value} className={className}>
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            checked={selectedValues.includes(item.value)}
                            onChange={() => toggleChecked(item.value)}
                        />
                        {item.label}
                    </label>
                </li>
            })}
        </ul>
    </>
}

export default QuestionTitle
