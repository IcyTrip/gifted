export class Gift {
    constructor(data) {
        this.id = data.id;
        this.tag = data.tag;
        this.url = data.url;
        this.opened = data.opened;
    }

    get GiftCardTemplate() {
        return /*html*/`
        <div onclick="app.GiftsController.openGift('${this.id}')" class="gift-card mx-1 bg-light my-3 p-3" style="width:30%;">
            <img class="w-100" src="${this.url}" style="object-fit:contain; height:15rem;">
            <p class="mt-3 fw-bold">${this.tag}</p>
        </div>
        `
    }
}       