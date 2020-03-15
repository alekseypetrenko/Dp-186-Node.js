export class AnimalView {
    constructor() {
        this.info = document.querySelector(".info-animals");
    }

    renderAnimals(arr) {
        this.info.innerHTML = arr.map(el => this.getAnimal(el)).join("");
    }

    getAnimal(el) {
        return `
            <div class="card col mb-4">
                <div class="card">
                    <img src="${el.image}" alt="Photo" class="center">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${el.breed}</li>
                        <li class="list-group-item">${el.species} ${el.gender}</li>
                        <li class="list-group-item">${this.convertDate(el)}</li>
                        <li class="list-group-item">Price: ${el.price} UAH</li>
                    </ul>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-outline-secondary btn-sm">Add to cart</a>
                    <a href="#" class="btn btn-outline-info btn-sm">Details</a>
                </div>
            </div>`
    }

    convertDate(el) {
        let diff = Date.now() - el.birth_date;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let daysAge;
        let yearsAge;
        let monthsAge;
        let age;

        yearsAge = Math.floor(days / 365);

        if (yearsAge >= 1 && (days % 365) < 30) {
            daysAge = days % 365;
            age = `Age: ${yearsAge} years ${daysAge} days`;
        }

        if (yearsAge >= 1 && (days % 365) > 30) {
            monthsAge = Math.floor((days % 365) / 30);
            daysAge = Math.floor((days % 365) % 30);
            age = `Age: ${yearsAge} years ${monthsAge} months ${daysAge} days`;
        }

        if (yearsAge < 1 && (days % 365) > 30) {
            monthsAge = Math.floor((days % 365) / 30);
            daysAge = Math.floor((days % 365) % 30);
            age = `Age: ${monthsAge} months ${daysAge} days`;
        }

        if (yearsAge < 1 && (days % 365) < 30) {
            daysAge = days % 365;
            age = `Age: ${daysAge} days`;
        }
        if (yearsAge >= 1 && (days % 365) === 0) {
            age = `Age: ${yearsAge} years`;
        }

        if (yearsAge >= 1 && ((days % 365) > 30) && ((days % 365) % 30) === 0) {
            monthsAge = Math.floor((days % 365) / 30);
            age = `Age: ${yearsAge} years ${monthsAge} months`;
        }

        if (yearsAge < 1 && ((days % 365) > 30) && ((days % 365) % 30) === 0) {
            monthsAge = Math.floor((days % 365) / 30);
            age = `Age: ${monthsAge} months`;
        }
        return age;
    }
}