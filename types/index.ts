import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICategory {
    id: number,
    attributes: ICategoryAttributes
}

export interface ICategoryAttributes {
    Title: string,
    Slug: string
}

export interface IPagination {
    page: number
    pageSize: number;
    pageCount: number;
    total: number
}

export interface IResourceMeta {
    pagination: IPagination
}

export interface ICollectionResponse<T> {
    data: T,
    meta: IResourceMeta

}

export interface IImageData {
    data: {
        attributes: {
            url: string
            formats: {
                small: {
                    url: string
                }
            }
        }
    }
}

export interface IArticlesAttributes {
    Title: string
    body: string | MDXRemoteSerializeResult
    Slug: string
    images: IImageData
    createdAt: string
    author: IAuthor
    shortDescription: string
}

export interface IAuthor {
    data: {
        attributes: {
            firstName: string
            lastName: string
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string
                            }
                        }
                    }
                }
            }
        }
    }
}

export interface IArticle {
    id: number
    attributes: IArticlesAttributes
}

export type TDirection = -1 | 1

export interface IQueryOptions {
    filters: any
    sort: any
    populate: any
    pagination: {
        page: number
        pageSize: number
    }
}