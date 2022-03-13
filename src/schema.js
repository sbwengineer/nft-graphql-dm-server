const { gql } = require( 'apollo-server-express' );

const typeDefs = gql`
    type Product {
        id: Int!
        name: String
        slug: ID
        short_description: String
        price: [Float]
        until: String
        sku: String
        stock: Int
        ratings: Float
        reviews: Int
        sale_count: Int
        is_hot: Boolean
        is_new: Boolean
        is_sale: Boolean
        is_out_of_stock: Boolean
        release_date: String
        developer: String
        publisher: String
        game_mode: String
        rated: Int
        small_pictures: [Media]
        pictures: [Media]
        large_pictures: [Media]
        brands: [ProductBrand]
        tags: [ProductTag]
        categories: [ProductCategory]
        variants: [Variant]
    }

    type Media {
        width: Int
        height: Int
        url: String
    }

    type Variant {
        price: Float
        sale_price: Float
        size: Size
        color: Color
    }

    type Size {
        name: String
        size: String
        thumb: Media
    }

    type Color {
        name: String
        color: String
        thumb: Media
    }

    type ProductTag {
        id: Int!
        name: String
        slug: ID
    }

    type ProductCategory {
        id: Int!
        name: String
        slug: ID
        parent: String
    }

    type ProductCategoryResponse {
        id: Int!
        name: String
        slug: ID
        parent: String
        count: Int
    }

    type ProductBrand {
        id: Int!
        name: String
        slug: ID
    }

    type Post {
        id: Int!
        title: String
        slug: ID
        author: String
        date: String
        comments: Int
        content: String
        type: PostType
        picture: [Media]
        small_picture: [Media]
        video: Boolean
        categories: [PostCategory]
    }

    type PostCategory {
        id: Int!
        name: String
        slug: ID
    }

    enum PostType {
        image
        video
        gallery
    }

    type ProductSingleResponse {
        data: Product
        prev: Product
        next: Product
        related: [Product] 
    }

    type SpecialProducts {
        featured: [Product]
        bestSelling: [Product]
        topRated: [Product]
        latest: [Product]
        onSale: [Product]
    }

    type ShopSidebarResponse {
        categories: [ProductCategoryResponse],
        featured: [Product]
    }

    type ShopResponse {
        data: [Product]
        total: Int
        categoryFamily: [ProductCategory]
    }

    type PostsResponse {
        data: [Post]
        total: Int
    }

    type PostSingleResponse {
        data: Post
        related: [Post]
    }

    type PostSidebarResponse {
        categories: [PostCategory]
        recent: [Post]
    }

    type Query {
        hello: String
        products(demo: Int! search: String, colors: [String] = [], sizes: [String] = [], brands: [String] = [], min_price: Int = null, max_price: Int = null, category: String, tag: String, ratings:[Int] = [], sortBy: String, from: Int = 0, to: Int): ShopResponse
        product(demo: Int!, slug: String!, onlyData: Boolean): ProductSingleResponse
        specialProducts(demo: Int!, featured: Boolean, bestSelling: Boolean, topRated: Boolean, latest: Boolean, onSale: Boolean, count: Int): SpecialProducts
        shopSidebarData(demo: Int!, featured: Boolean): ShopSidebarResponse
        dealProducts(demo: Int!, count: Int = 1): [Product]

        posts(demo: Int!, category: String, from: Int = 0, to: Int): PostsResponse
        post(demo: Int!, slug: String!): PostSingleResponse
        postSidebarData(demo: Int!): PostSidebarResponse
    }
`

module.exports = typeDefs;