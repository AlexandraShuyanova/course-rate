export const API = {
    topPage: {
        find: process.env.NEXT_PUBLIC_API_URL + '/api/top-page/find',
        byAlias: process.env.NEXT_PUBLIC_API_URL + '/api/top-page/byAlias/',
    },

    product: {
        find: process.env.NEXT_PUBLIC_API_URL + '/api/product/find'
    },

    review: {
        createDemo: process.env.NEXT_PUBLIC_API_URL + '/api/review/create-demo'
    }
};