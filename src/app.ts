import ResponseBuilder from './builder/response-builder';

try {
    const response = new ResponseBuilder()
        .ok(true)
        .redirected(false)
        .status(201)
        .statusText("Resource updated successfully")
        .type('basic')
        .url("./")
        .build();
    
    console.log(response);

    const response2 = new ResponseBuilder()
        .ok(false)
        .redirected(false)
        .status(400)
        .statusText("Bad Request")
        .type('error')
        .url("./")
        .build();
    
    console.log(response2);

    const response3 = new ResponseBuilder()
        .ok(false)
        .status(200)
        .statusText("Invalid Response")
        .build();
    
    console.log(response3);
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
