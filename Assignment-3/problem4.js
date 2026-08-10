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
