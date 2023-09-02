"use strict";
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
Object.defineProperty(exports, "__esModule", { value: true });
const second = () => {
    const shoppingArr = [];
    // to add new item
    const addItem = (item, quantity) => {
        shoppingArr.push({ item, quantity });
        console.log(shoppingArr, "Item Added");
    };
    // to remove item
    const removeItem = (item) => {
        const indexToRemove = shoppingArr.findIndex((e) => {
            return e.item === item;
        });
        if (indexToRemove !== -1) {
            shoppingArr.splice(indexToRemove, 1);
        }
        console.log(shoppingArr, "Item removed successfully");
    };
    // to update quantity
    const updateQuantity = (item, quantity) => {
        const indexToUpdate = shoppingArr.findIndex((e) => {
            return e.item === item;
        });
        if (indexToUpdate !== -1) {
            shoppingArr.splice(indexToUpdate, 1, { item, quantity });
        }
        console.log(shoppingArr, "quantity updated successfully");
    };
    addItem("bag", 1);
    addItem("shoes", 1);
    removeItem("bag");
    updateQuantity("shoes", 2);
};
exports.default = second;
