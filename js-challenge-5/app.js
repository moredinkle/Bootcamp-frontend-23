class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HttpError";
        this.response = response;
    }
}

async function loadJson(url) {
    let res = await fetch(url)
    if (res.status == 200) return res.json()
    else throw new HttpError(response);
}

async function demoGithubUser() {
    try {
        let name = "moredinkle"
        prompt("Enter a name?", name);
        let response = await loadJson(`https://api.github.com/users/${name}`)
        alert(`Full name: ${response.name}.`);
        return response;
    }
    catch(err){
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    }
}
demoGithubUser();
