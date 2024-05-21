export const StockFinder = (CurrentClientData,searchinputText) => {
    console.log(searchinputText)
    for (const stock of CurrentClientData) {
        if (searchinputText.toLowerCase() === stock.stock_name.toLowerCase()) {

            return stock;
        }
        // else{
        //     console.log("no match in current portfolio")
        // }
    }
    return false;
};

