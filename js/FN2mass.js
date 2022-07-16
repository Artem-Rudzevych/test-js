const logins = ['ava', 'aria', 'missi', 'loly', 'poly'];

const findLogin = function (allLogins, loginToFind) {
    // for (const login of allLogins) {
    //     if (login === loginToFind) {
    //         return `${loginToFind}- Found`;
    //     }
    // }
    // return `${loginToFind}- Not Found`;
    return allLogins.includes(loginToFind)
        ? `${loginToFind}- Found`
        : `${loginToFind}- Not Found`;
};

console.log(findLogin(logins, 'missi'));
console.log(findLogin(logins, 'aria'));
console.log(findLogin(logins, 'choko'));
console.log(findLogin(logins, 'ava'));
