// Module xac thuc nguoi dung (Auth Module)
// Da giai quyet xung dot giua main va feature/user-login
function login(mode = 'oauth2') {
    if (mode === 'oauth2') {
        console.log('Login logic v2 with OAuth2');
    } else {
        console.log('Login logic v1');
    }
}

module.exports = { login };