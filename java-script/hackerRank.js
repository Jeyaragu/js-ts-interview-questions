
const calculateSeatBooking = (totalRow, seatsPerRow, ticketRate) => {
    const totalSeats = totalRow * seatsPerRow;
    let seatNumbers = []
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
        seatAllocation.push(seatNumbers.slice(k, k + seatsPerRow))
    }
    let bookingOutLet = [];
    for (let m = 0; m < seatAllocation.length; m++) {
        let mockedSeats = [];
        if (m % 2 == 0) { // Odd Seats
            seatAllocation[m].forEach((seats) => {
                if (seats % 2 == 0) {
                    mockedSeats.push(seats)
                } else {
                    // Booked seat masked
                    mockedSeats.push('*')
                }
            })
        } else { // Even Seats
            seatAllocation[m].forEach((seats) => {
                if (seats % 2 == 0) {
                    // Booked seat masked
                    mockedSeats.push('*')
                } else {
                    mockedSeats.push(seats)
                }
            })
        }
        bookingOutLet.push(mockedSeats)
    }
    console.log('bookingOutLet', bookingOutLet)
    return {
        totalSeats,
        bookedSeats: bookedSeats.length,
        nonBookedSeats: nonBookedSeats.length,
    }
};

console.log(calculateSeatBooking(4, 10, 100));