export class Gif{
    constructor(data) {
        this.id = data.id;
        this.url = data.images.downsized.url;
    }

    get GifTemplate() {
        return /*html*/`
            <div onclick="copyLink('${this.url}')" class="gif-card m-2">
                <img src="${this.url}" alt="Gif" class="w-100 object-fit-cover">
            </div>
        `
    }
}