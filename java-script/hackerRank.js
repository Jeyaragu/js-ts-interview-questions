const calculateSeatBooking = (totalRow, seatsPerRow, ticketRate) => {
    const totalSeats = totalRow * seatsPerRow;
    let seatNumbers = [];
    let bookedSeats = [];
    let nonBookedSeats = [];
    // Finding total number of seats / odd seats
    for (let i = 1; i <= totalSeats; i++) {
        if (i % 2 !== 0) {
            bookedSeats.push(i);
        } else {
            nonBookedSeats.push(i);
        }
        seatNumbers.push(i);
    }
    let seatAllocation = [];
    for (let k = 0; k < seatNumbers.length; k = k + seatsPerRow) {
        seatAllocation.push(seatNumbers.slice(k, k + seatsPerRow));
    }
    let bookingOutLet = [];
    for (let m = 0; m < seatAllocation.length; m++) {
        let mockedSeats = [];
        if (m % 2 == 0) {
            // Odd Seats
            seatAllocation[m].forEach((seats) => {
                if (seats % 2 == 0) {
                    mockedSeats.push(seats);
                } else {
                    // Booked seat masked
                    mockedSeats.push("*");
                }
            });
        } else {
            // Even Seats
            seatAllocation[m].forEach((seats) => {
                if (seats % 2 == 0) {
                    // Booked seat masked
                    mockedSeats.push("*");
                } else {
                    mockedSeats.push(seats);
                }
            });
        }
        bookingOutLet.push(mockedSeats);
    }
    console.log("bookingOutLet", bookingOutLet);
    return {
        totalSeats,
        bookedSeats: bookedSeats.length,
        nonBookedSeats: nonBookedSeats.length,
    };
};
// console.log(calculateSeatBooking(4, 10, 100));

// Sort the positive number and keeping the negative number in the same place
const sortArry = (arr) => {
    // Filter only numbers 
    const convertToNumbers = arr
        .filter((element) => !isNaN(Number(element)))
        .map(Number);
    // Sort the positive values    
    const sortedValues = convertToNumbers
        .filter((n) => Math.sign(n) !== -1).sort((a, b) => a - b);
    const result = [];
    arr.map((a, index) => {
        if (Math.sign(a) == -1) result[index] = a;
        sortedValues[index] ? result.push(sortedValues[index]) : ''
    })
    return {
        arr,
        sortedValues,
        result
    };
};

// console.log(sortArry([3, 1, -1, 5, 2, 4, -3]));

const findInterSection = (x1, v1, x2, v2) => {
    let initalValue_1 = v1;
    let initalValue_2 = v2;
    let velocity_1 = [v1];
    let velocity_2 = [v2];
    while ((velocity_1.length && velocity_2.length) < 10) {
        initalValue_1 = initalValue_1 + v1;
        initalValue_2 = initalValue_2 + v2;
        velocity_1.push(initalValue_1);
        velocity_2.push(initalValue_2);
    }
    const interSectionResult = velocity_1.map((element) => {
        return velocity_2.includes(element)
    });
    return {
        velocity_1,
        velocity_2,
        interSectionResult
    }
}
console.log(findInterSection(0, 1, 4, 2))

// Find the sum of the number
const findSumOfNumber = (n) => {
    return (n * (n + 1) / 2)
}
console.log(findSumOfNumber(10));