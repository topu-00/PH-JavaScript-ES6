//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    if (typeof student !== "object" || student === null) return "Invalid";
    let keys = Object.keys(student);
    if (keys.includes("name") && keys.includes("age") && keys.includes("course")) {
        let { name, age, course } = student;
        return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
    }
    else {
        return "Invalid";
    }
}


//Problem-02: Active User Filter
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

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }
    let word = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";
    for (let value of word) {
        if (value.startsWith("#")) {
            hashtagCount++;
            if (longestTag.length < value.slice(1).length) {
                longestTag = value.slice(1);
            }
        }
    }
    return {
        hashtagCount,
        longestTag
    }
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if (Array.isArray(scores) && scores.length !== 0) {
        for (let value of scores) {
            if (typeof value === "number") {
                continue;
            }
            else {
                return "Invalid";
            }
        }
        let updatedScore = scores.map(value => value + 10);
        return updatedScore.reduce((sum, value) => sum + value, 0);
    }
    return "Invalid";
}


//Problem-05: Debugging Challenge - AI Leaderboard Generator
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (typeof student !== "object" || student === null) {
            return "Invalid";
        }
        else {
            let keys = Object.keys(student);
            if (keys.includes("name") && keys.includes("score")) {
                if (typeof student.score === "number") {
                    continue;
                }
                else {
                    return "Invalid";
                }
            }
            else {
                return "Invalid";
            }
        }
    }

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}



