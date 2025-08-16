const data = [
    {
        id: crypto.randomUUID(),
        thumbnail: 'p1.png',
        title: 'Urban Gradient Graphic Tee',
        rating: 4,
        stock: 120,
        price: 28,
        mfd: "2015-03-25"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p2.png',
        title: 'Classic Solid Blue Tee',
        rating: 3,
        stock: 95,
        price: 24,
        mfd: "2024-04-27"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p3.png',
        title: 'Casual Green Striped Shirt',
        rating: 4,
        stock: 85,
        price: 52,
        mfd: "2019-11-18"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p4.png',
        title: 'Essential Mid-Wash Slim Jeans',
        rating: 5,
        stock: 200,
        price: 78,
        mfd: "2023-07-21"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p5.png',
        title: 'Rust Streetwear Slogan Tee',
        rating: 4,
        stock: 150,
        price: 32,
        mfd: "2021-03-14"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p6.png',
        title: 'Vivid Multicolor Print Tee',
        rating: 5,
        stock: 180,
        price: 35,
        mfd: "2024-02-09"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p7.png',
        title: 'Heritage Red & Navy Check Shirt',
        rating: 4,
        stock: 75,
        price: 58,
        mfd: "2020-08-30"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p8.png',
        title: 'Casual Mid-Wash Denim Shorts',
        rating: 4,
        stock: 130,
        price: 42,
        mfd: "2022-06-15"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p9.png',
        title: 'Mauve Premium Polo Shirt',
        rating: 5,
        stock: 90,
        price: 45,
        mfd: "2023-01-10"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p10.png',
        title: 'Retro Orange Striped Raglan Tee',
        rating: 4,
        stock: 160,
        price: 26,
        mfd: "2021-09-05"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p11.png',
        title: 'Black Slim-Fit Denim Jeans',
        rating: 5,
        stock: 220,
        price: 82,
        mfd: "2022-12-12"
    },
    {
        id: crypto.randomUUID(),
        thumbnail: 'p12.png',
        title: 'White Striped Raglan Tee',
        rating: 3,
        stock: 140,
        price: 27,
        mfd: "2020-05-25"
    }
];


function getAllProducts() {
    return data;
}

export { getAllProducts };

