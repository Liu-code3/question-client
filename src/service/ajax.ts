// const HOST  = 'http://localhost:3001' // Mock 的 host
const HOST  = 'http://localhost:3005' // nestjs 的 host

async function get (url: string) {
    const res = await fetch(`${HOST}${url}`)
    return res.json()
}

async function post<T> (url: string, data: T) {
    const res = await fetch(`${HOST}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

export {
    get,
    post
}
