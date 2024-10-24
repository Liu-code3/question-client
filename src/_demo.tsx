import type { FC } from 'react'

type PropsType =  {
    info: string,
    id: string
}
const Question: FC<PropsType>  = (props) => {
    return <>
        <div>fuck foo</div>
        <div>{props.info}</div>
        <div>{ props.id }</div>
    </>
}


/**
 * 只在  build 构建时运行  线上环境下, 每次请求(刷新)不会再执行
 * Static Generation 项目构建时 直接产出HTML文件
 *
 */
// export async function getStaticProps () {
//     return {
//         props: {
//             info: '请求来的数据 static'
//         }
//     }
// }

/**
 * Server-side rendering 每次请求时动态生成HTML
 * 每次请求都执行
 */
export async function getServerSideProps (context: { params: { id: string } }) {
    const { id  } = context.params
    return {
        props: {
            info: '请求来的数据 server',
            id
        }
    }
}

export default Question
