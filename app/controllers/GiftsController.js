import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class GiftsController {
    constructor(){
        console.log("Gifts Controller");
        AppState.on('account', this.getGift);
        AppState.on('gifts', this._drawGifts);
    }
    
    _drawGifts() {
        let giftsHTML = "";
        AppState.gifts.forEach(gift => {
            giftsHTML += gift.GiftCardTemplate;
        });
        setHTML('gift-container', giftsHTML);
    }


    async getGift(refresh = false) {
        try{
            await giftsService.getGifts(refresh);
        } catch(error) {
            Pop.toast("Could not get gift", 'error')
            console.log(error);
        }
    }

    async openGift(giftId) {
        try{
            await giftsService.openGift(giftId);
            await giftsService.getGifts(true);
        } catch(error) {
            Pop.toast("Could not get gift", 'error')
            console.log(error);
        }
    }

    async createGift(giftTag, giftUrl) {
        try{
            await giftsService.createGift(giftTag, giftUrl);
        } catch(error) {
            Pop.toast("Could not create gift", 'error');
            console.log(error);
        }
    }
}

export const giftsController = new GiftsController();