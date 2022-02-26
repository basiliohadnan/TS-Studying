function processaToken(token) {
    return token.replace(/2/g, 'X');
}
function getToken() {
    return processaToken('1234');
}
