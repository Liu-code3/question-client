import type { FC } from 'react'
import PageWrapper from "@/components/PageWrapper/PageWrapper";

const Fail: FC = () => {
    return (
        <PageWrapper title="fail">
         <h1>失败</h1>
         <p>问卷提交失败</p>
        </PageWrapper>
    )
}

export default Fail
