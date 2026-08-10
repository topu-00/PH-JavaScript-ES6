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