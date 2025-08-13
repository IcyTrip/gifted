export class Gift {
    constructor(data) {
        this.id = data.id;
        this.tag = data.tag;
        this.url = data.url;
        this.opened = data.opened;
        this.creatorId = data.creatorId;
    }

    get GiftCardTemplate() {
        return /*html*/`
        <div onclick="app.GiftsController.openGift('${this.id}')" class="gift-card w-100 bg-light" style="break-inside:avoid;">
            <img class="w-100" src="${this.url}">
            <p class="cardImg fw-bold text-center p-2">${this.tag}</p>
        </div>
        `
    }

    get GiftCardTemplateDelete() {
        return /*html*/`
        <div class="gift-card w-100 bg-light" style="break-inside:avoid;">
            <i onclick="app.GiftsController.deleteGift('${this.id}')" class="mdi mdi-trash-can position-absolute my-1 mx-2 fs-3" style="color:#de1107; cursor:pointer;"></i>
            <img onclick="app.GiftsController.openGift('${this.id}')" class="w-100" src="${this.url}">
            <p class="cardImg fw-bold text-center p-2">${this.tag}</p>
        </div>
        `
    }
}       