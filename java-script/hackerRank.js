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
    console.log('bookingOutLet', bookingOutLet)
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
        .filter((n) => Math.sign(n) !== -1)
        .sort((a, b) => a - b);
    const result = [];
    arr.map((a, index) => {
        if (Math.sign(a) == -1) result[index] = a;
        sortedValues[index] ? result.push(sortedValues[index]) : "";
    });
    return {
        arr,
        sortedValues,
        result,
    };
};

// console.log(sortArry([3, 1, -1, 5, 2, 4, -3]));

// Find intersection of kangaroo
// x1 and x2 are the starting points of the kangaroo
// v1 and v2 are the meter per jump of the kangaroo
const findInterSection = (x1, v1, x2, v2) => {
    let jumpTime = 1;
    let movePositions_1 = new Map();
    let movePositions_2 = new Map();
    movePositions_1.set(jumpTime, x1 + v1);
    movePositions_2.set(jumpTime, x2 + v2);
    let interSectionStatus = "NO";
    while ((movePositions_1.size && movePositions_2.size) < 10000) {
        let newJumpLocation = jumpTime + 1;
        movePositions_1.set(
            newJumpLocation,
            Number(movePositions_1.get(jumpTime)) + v1
        );
        movePositions_2.set(
            newJumpLocation,
            Number(movePositions_2.get(jumpTime)) + v2
        );
        jumpTime += 1;
    }
    for (const [key, value] of movePositions_1) {
        let getJumpDistance = movePositions_2.get(key);
        if (getJumpDistance == value) {
            interSectionStatus = 'YES';
            break;
        }
    }
    return interSectionStatus;
};
// console.log(findInterSection(0, 2, 4, 1));
// console.log((findInterSection(0,3,4,2)))
const kangaroo = (x1, v1, x2, v2) => {
    if (v1 === v2) return x1 === x2 ? "YES" : "NO"
    const n = (x2 - x1) / (v1 - v2);
    return n > 0 && Number.isInteger(n) ? "YES" : "NO"
};
// console.log((kangaroo(0,3,4,2)))

// Find the sum of the number
const findSumOfNumber = (n) => {
    return (n * (n + 1)) / 2;
};
// console.log(findSumOfNumber(10));

// Compare Triplets
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    a.forEach((element, index) => {
        element > b[index] ? alice += 1 : element < b[index] ? bob += 1 : '';
    })
    return [alice, bob]
}
console.log(compareTriplets([17, 28, 30, 1], [99, 16, 8, 1]))