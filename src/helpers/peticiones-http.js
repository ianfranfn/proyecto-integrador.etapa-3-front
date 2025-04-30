
export const peticionesHttp = async (url, options) => {

    try {

        const res = await fetch(url, options)
        if (!res.ok) throw new Error(`Error ${res.status}: ${await res.text()}`)
        return await res.json()

    } catch (error) {
        console.error('[peticionesHttp]', error)
        throw error
    }
}