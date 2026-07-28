console.clear();
console.log("Inventory Entry system");
// inventory
console.log();
const prompt = require("prompt-sync")();
let stock=[];
{
    let item_code = Number(prompt("Enter Item Code:"));
    let item_name = prompt("Enter Item name:");
    let item_price = Number(prompt("Enter price:"));
    let item_quantity = Number(prompt("Enter quantity:"));
let item =
{
    code: item_code,
    item: item_name,
    price: item_price,
    quantity: item_quantity,

};
stock.push(item);
console.log("\nInventory Updated");
console.log();
}
while(true)
{
    let loop =prompt("Add more items (0 for no/ 1 for yes):");
    loop =parseInt(loop);
    if(loop ===0)break;

}
console.log("\n inventory entry completed");
console.log("\n updated stock is as follows");
console.log(stock);
