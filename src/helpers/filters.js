const addFilters = (products, filters) => {
    let filteredProducts = products.filter(product => filters.category.includes(product.categoryName));
    return filteredProducts.length === 0 || filters.category.includes("All items") ? products : filteredProducts
}

export { addFilters }