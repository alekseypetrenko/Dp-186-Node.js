export class ViewMessage {
    constructor() {
        this.list = document.querySelector('.topics-list');
    }

    renderMessages(arr) {
        this.list.innerHTML = arr.map(({ author, message }) => `<p><strong>${author}:</strong> <span>${message}</span></p>`).join('');
    }
}