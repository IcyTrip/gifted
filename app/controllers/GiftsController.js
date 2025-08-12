import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
    constructor(){
        console.log("Gifts Controller");
        AppState.on('account', this.getGift)
    }

    async getGift() {
        try{
            await giftsService.getGifts();
        } catch(error) {
            Pop.toast("Could not get gift", 'error')
            console.log(error);
        }
    }
}