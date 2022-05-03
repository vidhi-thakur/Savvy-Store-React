const addFilters = (products, filters) => {
    let filteredProducts = products.filter(product => filters.category.includes(product.categoryName));
    return filteredProducts.length === 0 || filters.category.includes("All items") ? products : filteredProducts
}

const sortProducts = (products, filters) => {
    switch (filters?.sort[0]) {
        case 'Price - low to high':
            return products.sort((a, b) => a.price - b.price)
        case "Price - high to low":
            return products.sort((a, b) => b.price - a.price)
        default:
            return products;
    }
}

export { addFilters, sortProducts }