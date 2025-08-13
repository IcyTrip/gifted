import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";


class GiftsService{
    async getGifts(refresh = false) {
        const response = await api.get(`api/gifts`);

        if (refresh) {
            AppState.gifts.length = 0;
        }
        response.data.forEach(giftData => {
            AppState.gifts.push(new Gift(giftData));
        })
    }

    async openGift(giftId) {
        const gift = AppState.gifts.find(g => g.id === giftId);
        if(gift) {
            gift.opened = true;
            const openedGift = AppState.gifts.find(gift => gift.id === giftId);
            const response = await api.put(`api/gifts/${giftId}`, openedGift)
        }
    }
    
    async createGift(giftTag, giftUrl) {
        const newGift = new Gift({ tag: giftTag, url: giftUrl });
        const response = await api.post(`api/gifts`, newGift);
        AppState.gifts.push(new Gift(response.data));
    }

    async deleteGift(giftId) {
        await api.delete(`api/gifts/${giftId}`);
        AppState.gifts = AppState.gifts.filter(g => g.id !== giftId);
    }
}

export const giftsService = new GiftsService();