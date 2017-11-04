function User(id, email) {
    this.id = id;
    this.email = email;
}

function CheckUserSession(user) {
    if (!user || !user.id)
        location.href = "#/Login";
}
