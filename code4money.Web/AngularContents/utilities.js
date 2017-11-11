
/**
 * Gets session user.
 * @param {sessionStorage} $localStorage
 * @returns {User}
 */
function GetSessionUser($localStorage) {
    return $localStorage.user;
}

/**
 * Sets $localStorage.user to user: User
 * @param {User} user
 * @param {string} loginType
 * @returns {void}
 */
function SetUserSession($localStorage, user, loginType) {
    $localStorage.user = user;
    $localStorage.loginType = loginType;
}

/**
 * Unset $localStorage.user
 * @returns {void}
 */
function UnsetUserSession($localStorage) {
    $localStorage.user = null;
    $localStorage.loginType = null;
}

/**
 * Unset $localStorage
 * @returns {void}
 */
function UnsetSession($localStorage) {
    $localStorage.$reset();
}

/**
 * Class for User
 * @param {number} id
 * @param {string} email
 * @param {string} name
 */
function User(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
}

/**
 * Redirects based on answer
 * @param {User} user
 * @param {boolean} [isOnLoginPage]
 * @returns {void}
 */
function CheckUserSession(user, isOnLoginPage) {
    isOnLoginPage = (typeof isOnLoginPage == 'undefined') ? false : isOnLoginPage;
    if (!user || !user.id)
        location.href = "#/Login";
    else if (isOnLoginPage)
        location.href = "#/Browse";
}
