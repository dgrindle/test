const session = window.sessionStorage.accessToken;
const email = JSON.parse(window.localStorage.ajs_user_traits).email;
const name = JSON.parse(window.localStorage.ajs_user_traits).name;
alert(`Hello ${name}, I see your email is ${email} and your session token is ${session}`);
