const addFilters = (products, filters) => {
    let finalProducts = applyCategory(products, filters);
    finalProducts = sortProducts(finalProducts, filters);
    finalProducts = applyRatings(finalProducts, filters);
    return finalProducts;
}

const applyCategory = (products, filters) => {
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

const applyRatings = (products, filters) => {

    let prodWithRating = products.filter(product => filters.rating.includes(`${product.rating}⭐`));
    return filters.rating.length === 0 ? products : prodWithRating
}

export { addFilters }