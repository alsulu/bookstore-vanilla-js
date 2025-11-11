const API = import.meta.env.VITE_API_URL || "http://localhost:1111";

const getData = (url) => 
    fetch(API + url)
        .then((response) => {
            //console.log(response);
            if (response.ok)
                return response.json();
            else {
                throw new Error;
            }
        })
        .catch((error) => {
            console.log(error);
        })

const postData = (url, params={}) => 
    fetch(API + url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //console.log(response);
            if (response.ok)
                return response.json();
            else {
                throw new Error;
            }
        })
        .catch((error) => {
            console.log(error);
        })

const putData = (url, params={}) => 
    fetch(API + url, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //console.log(response);
            if (response.ok)
                return response.json();
            else {
                throw new Error;
            }
        })
        .catch((error) => {
            console.log(error);
        })


const deleteData = (url, params={}) => 
    fetch(API + url, {
        method: 'DELETE',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            //console.log(response);
            if (response.ok)
                return response.json();
            else {
                throw new Error;
            }
        })
        .catch((error) => {
            console.log(error);
        })

export default {
    get: getData,
    post: postData,
    put: putData,
    delete: deleteData,
}