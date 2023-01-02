import { useEffect } from "react";

const Api = () => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", { // Appel API
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })   
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`)
                }

                return response.json();
            })
            .then(json => console.log(json))
    }, [])

    return (
        <div>
            <h1>Welcome on Api Page!</h1>
        </div>
    );
};

export default Api;