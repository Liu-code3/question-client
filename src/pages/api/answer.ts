// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {postAnswer} from "@/service/answer";

function genAnswerInfo (reqBody: { [key: string]: string }) {
    const answerList: Array<{ componentId: string, value: string }> = []

    Object.keys(reqBody).forEach((key: string) => {
        if(key === 'questionId') return

        answerList.push({
           componentId: key,
            value: reqBody[key]
        })
    })

    return {
        questionId: reqBody.questionId || '',
        answerList
    }
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method !== 'POST') return res.status(200).json({ message: 'Method Not Allowed' })

    const answerInfo = genAnswerInfo(req.body)

    try {
        const resData = await postAnswer(answerInfo)
        // 提交到服务器
        if(resData.code == 200) {
            // 跳转到成功页面
            res.redirect('/success')
        } else {
            res.redirect('/fail')
        }
    } catch (err)  {
        if(err) res.redirect('/fail')
    }
}
