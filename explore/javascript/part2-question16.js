let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let cars in statistics) {
    let firstChar = cars.charAt(0);
    let odd = statistics[cars] % 2;
    if (firstChar == 'r' || odd == 1 ) {
        console.log(statistics[cars]);
    }
}