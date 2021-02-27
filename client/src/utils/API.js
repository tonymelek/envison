// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getAllData() {
        const response = await fetch('/api/all')
        const data = await response.json()
        return data;

    }
}