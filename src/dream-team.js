module.exports = function createDreamTeam(members) {
    var name = "";
    // remove line with error and write your code here
    try {
        for (var i = 0; i < members.length; i++) {
            if (typeof members[i] === "string") {
              members[i] = members[i].split(" ").join("");
              let firstChar = members[i].split("");
              name = name + firstChar[0];
            }

        }
        name = name.toUpperCase().split("").sort().join("");
        console.log(name);
        return name;
    } catch (e) {
        return false;
    }
};