function filterActiveUsers(users) {
    if (Array.isArray(users)) {
        if (users.length === 0) return "Invalid";
        const filterUser = [];
        for (let user of users) {
            if (typeof user === "object" && user !== null) {
                let key = Object.keys(user);
                if (key.includes("isActive")) {
                    filterUser.push(user);
                }
                else {
                    return "Invalid";
                }
            }
            else {
                return "Invalid";
            }
        }
        return filterUser.filter(user => user.isActive === true);
    }
    return "Invalid";
}