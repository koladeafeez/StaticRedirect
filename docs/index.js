console.log("welcome");

const url = location.search;
console.log(url);
    const params = new URLSearchParams(url);
    let paramObj = {};
    for (var value of params.keys()) {
        paramObj[value] = params.get(value);
    }

console.log(paramObj);

var port = paramObj["port"];
location.replace(`https://localhost:44379/SCA/Complete${url}`);
