import { get } from "@/service/ajax";

async function getQuestionInfoById  (id: string) {
    const res = await get(`/api/answer/${id}`)
    return res
}


export {
    getQuestionInfoById
}
