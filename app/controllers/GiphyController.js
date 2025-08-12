import { AppState } from "../AppState.js";
import { giphyService } from "../services/GiphyService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiphyController {
    constructor() {
        console.log("Giphy Controller");
    }

    _drawGifs() {
        let gifsHTML = "";
        AppState.gifs.forEach(gif => {
            gifsHTML += gif.GifTemplate;
        });
        setHTML('gif-container', gifsHTML);
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

export const giphyController = new GiphyController();