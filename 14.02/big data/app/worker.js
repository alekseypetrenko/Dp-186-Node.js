self.onmessage = function(event) {
    const data = event.data;
    const colors = [];
    data.cars.forEach(el => {
        if (el.COLOR !== "НЕВИЗНАЧЕНИЙ") {
            colors.push(el.COLOR)
        }
    });
    
    if(colors.length == 0) return null
    switch(data.find){
        case "colors":
            self.postMessage(colors)
            break;
        case "mostFreq":
            let count = 0;
            const storeColors = {};
            let mostFreq;

            for(let i = 0; i < colors.length; i++){
                const color = colors[i];

                if(storeColors[color] == this.undefined){
                    storeColors[color] = 1;
                } else {
                    storeColors[color]++
                }

                if(storeColors[color] > count){
                    count = storeColors[color];
                    mostFreq = colors[i]
                }
            }
            self.postMessage(mostFreq)
            break;
        case "countCars":
            // for test
            // let arr = []

            // for (let i =0; i < 20; i++){
            //     arr.push(data.cars[i])
            // }

            // self.postMessage(arr)
            break;
        case "oldAndNew":
            let newestCar = data.cars.map(el => {
                return el.THEFT_DATA.match(/[^T]*/)
            }).map(el => el[0].split("-").join("")).sort((a,b) => a - b)[data.cars.length -1]

            let oldestCar = data.cars.map(el => {
                return el.THEFT_DATA.match(/[^T]*/)
            }).map(el => el[0].split("-").join("")).sort((a,b) => a-b)[0]

            let resulArr = [];
            resulArr.push({newestCar: newestCar}, {oldestCar: oldestCar})


            self.postMessage(resulArr)
    }

    
    


    


}