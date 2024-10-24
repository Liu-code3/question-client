import {post} from "@/service/ajax";

async function postAnswer  (answerInfo: { [key: string]: any }) {
    const res = await post('/api/answer', answerInfo)
    return res
}


export {
    postAnswer
}
