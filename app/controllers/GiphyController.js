import { giphyService } from "../services/GiphyService.js";
import { Pop } from "../utils/Pop.js";

export class GiphyController {
    constructor() {
        console.log("Giphy Controller");
    }

    async searchGifs(query) {
        try{
            await giphyService.search(query);
        } catch(error) {
            Pop.toast("Could not get gifs", "error");
            console.log(error);
        }
    }
}