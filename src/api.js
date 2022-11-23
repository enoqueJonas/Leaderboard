export const postScore = async (player) => {
    let playerJson = JSON.stringify(player);
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XtHbpHtF3qOajaBjbP4M/scores/`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: playerJson,
    }).then(resp => resp.json()).catch(err => err);
    return response;
}

export const getScore = async () => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XtHbpHtF3qOajaBjbP4M/scores/`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }).then(resp => resp.json()).catch(err => err);
    console.log(response.result)
    return response.result;
}