class HttpClient {

    // declare class fields
    defaultHeaders;

    constructor() {

        this.defaultHeaders = {
            "Content-Type": "application/json"
        };

    }

    // GET
     async get(url, ) {

       const response = await fetch(url, {
            method: "GET",
            headers: this.defaultHeaders,    
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return await response.json();
    }

    // POST
    async post(url, payload) {

        const response = await fetch(url, {
            method: "POST",
            headers: this.defaultHeaders,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return await response.json();
    }

    // PUT
    async put(url, payload) {

        const response = await fetch(url, {
            method: "PUT",
            headers: this.defaultHeaders,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return await response.json();
    }

    // DELETE
    async delete(url) {

        const response = await fetch(url, {
            method: "DELETE",
            headers: this.defaultHeaders,    
        });
        
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return await response.json();
    }

}

  module.exports = HttpClient;