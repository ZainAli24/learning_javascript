const accountId = 21345
// accountId = 54321   // Const variable cannot be changed once assigned a value

let accountName = "Zain"
accountName = "Sameer"

var accountEmail = "zain@gmail.com"
accountEmail = "sameeer@gmail.com"
// var is function-scoped and can be redeclared and updated, while let is block-scoped and cannot be redeclared but can be updated. Const is also block-scoped but cannot be updated or redeclared.

accontCity = "Gujar Khan"
accontCity = "Pindi"


console.log(accountName, accountEmail, accontCity)

console.table([accountName, accountEmail, accontCity])
// table is used to display data in a tabular format in the console.



function blockScopeExample() {
    if (true) {
        var functionScoped = "I am function scoped"
        let blockScoped = "I am block scoped"
        const constantBlockScoped = "I am a constant block scoped variable"
    }
    console.log(functionScoped) // This will work
    console.log(blockScoped) // This will throw an error
    console.log(constantBlockScoped) // This will also throw an error
}

console.log(functionScoped);

