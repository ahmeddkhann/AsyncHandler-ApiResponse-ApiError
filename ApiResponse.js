class ApiResponse {
    constructor(
        statusCode,
        message = "Success",
        data
    ){
        statusCode = this.statusCode
        message = this.message
        data = this.data 
        success = statusCode < 400
    }
}

export default ApiResponse