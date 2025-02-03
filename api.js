const session = window.sessionStorage.accessToken;
const email = JSON.parse(window.localStorage.ajs_user_traits).email;
const name = JSON.parse(window.localStorage.ajs_user_traits).name;
alert(`Hello ${name}, I see your email is ${email} and your session token is ${session}`);

const url = 'https://api.drata.com/public-api-keys';
const data = {
    name: "H4test2",
    expiresAt: null,
    accessType: "ALL_READ_AND_WRITE",
    allowListIPAddresses: ["1.1.1.1"]
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session}` // Replace with your actual token
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(json => {
    console.log(json);
	alert(`Created API key for persistent access: ${json.accessToken}`);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
