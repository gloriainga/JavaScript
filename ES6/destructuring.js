var arrayCountries = ["Peru", "Chile", "Colombia", "Argentina", "Brasil"];
const [peru, chile, colombia] = arrayCountries;
console.log(peru, chile, colombia);

const user = {
    username: "dev01",
    role: "admin",
    fullname: "Juan Cortez"
};

const {username, role, fullname} = user;
console.log(username, role, fullname);

printData(user);

function printData({username, role, fullname}){
    console.log(fullname);
}