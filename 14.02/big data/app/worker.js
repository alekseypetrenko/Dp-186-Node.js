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
            let newestCar = cars.map(el => {
                return el.THEFT_DATA.match(/[^T]*/)
            }).map(el => el[0].split("-").join("")).sort((a,b) => a - b)[cars.length -1]

            let oldestCar = cars.map(el => {
                return el.THEFT_DATA.match(/[^T]*/)
            }).map(el => el[0].split("-").join("")).sort((a,b) => a-b)[0]

            let resulArr = [];
            resulArr.push({newestCar: newestCar}, {oldestCar: oldestCar})

            self.postMessage(resulArr)
    }

    
    


    


}