self.onmessage = function(event) {
    const data = event.data;
    const cars = data.cars;
    const colors = [];
    cars.forEach(el => {
        if (el.COLOR !== "НЕВИЗНАЧЕНИЙ") {
            colors.push(el.COLOR)
        }
    });
    
    if(colors.length == 0) return null
    switch(data.find){
        case "countColor":
            self.postMessage(colors)
            break;
        case "maxColor":
            let count = 0;
            const storeColors = {};
            let maxColor;

            for(let i = 0; i < colors.length; i++){
                const color = colors[i];

                if(storeColors[color] == this.undefined){
                    storeColors[color] = 1;
                } else {
                    storeColors[color]++
                }

                if(storeColors[color] > count){
                    count = storeColors[color];
                    maxColor = colors[i]
                }
            }
            self.postMessage(maxColor)
            break;
        case "countCars":
            function groupByOVD(arr){
                return arr.reduce(
                    (acc, item) => {
                        if(acc[item.OVD]){
                            acc[item.OVD].push(item)
                        } else {
                            acc[item.OVD] = [item]
                        }
                        return acc
                    },
                    {}
                )
            }

            function getSumOfBrands(groupedObjectOVD){
                return Object.keys(groupedObjectOVD).map(
                    item => {
                        let count = 0;
                        groupedObjectOVD[item].forEach(
                            item => item.BRAND ? count++ : count = 0
                        )
                        return {OVD: item, count} 
                    }
                )
            }

            let result = getSumOfBrands(groupByOVD(cars))

            self.postMessage(result)
            break;
        case "oldAndNew":
            function oldAndNew(cars){
                let oldestCar = {name: cars[0]["BRAND"], date: cars[0]["THEFT_DATA"]};
                let youngestCar = {name: cars[0]["BRAND"], date: cars[0]["THEFT_DATA"]};

                cars.forEach(element => {
                    if (new Date(oldestCar.date) > new Date(element.THEFT_DATA)){
                        oldestCar = {name: element["BRAND"], date: element.THEFT_DATA}
                    }

                    if (new Date(youngestCar.date) < new Date(element.THEFT_DATA)){
                        youngestCar = {name: element["BRAND"], date: element.THEFT_DATA}
                    }
                });
                return [oldestCar, youngestCar]
            
            }

            let resultArr = oldAndNew(cars)

            self.postMessage(resultArr)
    }

    
    


    


}