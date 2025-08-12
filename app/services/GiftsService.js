import { api } from "./AxiosService.js";


class GiftsService{
    async getGifts() {
        const response = await api.get(`api/gifts`);
        // Api does not retrieve gifts because it is required you be logged in to do so. (i cannot find how to login)
        console.log("Get Gifts Run");
    }
}

export const giftsService = new GiftsService();