function generateErrorResponse(error) {
    return {
        'errorType': error.status >= 500 ? "INTERNAL_SERVER_ERROR" : "BAD_REQUEST",
        'errorMessage': error.message
    };
};

module.exports = {
    generateErrorResponse,
}
