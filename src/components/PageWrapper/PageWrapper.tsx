import type { FC } from 'react'
import { JSX } from "react";
import Head from "next/head";
import Script from "next/script";

type PropsType = {
    title: string
    desc?: string
    css?: string
    js?: string
    children?: JSX.Element | JSX.Element[]
}


const PageWrapper: FC<PropsType> =  (props) => {
    const { title, desc = '', children, css = '', js = '' } = props

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="desction" content={desc} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <style>{css}</style>
            </Head>
            <main>
                {children}
            </main>
            {/* Script组件规定需要一个id属性 */}
            <Script id="page-js">{js}</Script>
        </>
    )
}

export default PageWrapper
