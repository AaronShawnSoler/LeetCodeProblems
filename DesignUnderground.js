var UndergroundSystem = function() {
    this.checkIns = {}
    this.average = {}
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    // save users who are signed in
    this.checkIns[id] = [stationName, t]
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    // if checkin doesn't exist there's no one to checkout
    if(!this.checkIns[id]) return

    // determind start and end stations
    let data = this.checkIns[id]
    let start = data[0]
    let end = stationName

    // average = totalTime / trips
    let time = t - data[1]
    let key = `${start},${end}`
    let trip = this.average[key]

    // if average already exists count trip and total time else initiate it
    this.average[key] = [
        trip ? trip[0] += time : time,
        trip ? trip[1] += 1 : 1
    ]
};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    // find trip and calculate average
    let trip = this.average[`${startStation},${endStation}`]
    let average = trip[0] / trip[1]
    
    return average
};

undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
undergroundSystem.getAverageTime("Paradise", "Cambridge");       // return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 12.00000