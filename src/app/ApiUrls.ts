export let debug = true;
export let domain = "http://localhost:5000";

if (debug) {
    domain = "http://localhost:5000";
} else {
    domain = "";
}

export const endpoints = {
    SignupApi: `${domain}/api/signup`,
    LoginApi: `${domain}/api/login`
};
