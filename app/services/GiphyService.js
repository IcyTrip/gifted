export const giphyApi = axios.create({
    baseURL: "http://api.giphy.com/v1/gifs",
    timeout: 8000,
    params: {
        api_key: "aoG6vICdJ3P6oIjFAgRmppYcyNfPiS5q",
        rating: "pg",
        limit: 10,
    },
});

class GiphyService{
    async search(query) {
        const response = await giphyApi.get('search', {
            params: {
                q: query
            }
        })
        console.log(response.data);
        const gifs = response.data.data.map(g => g.images.downsized_large.url);
        return gifs;
    }
}

export const giphyService = new GiphyService();