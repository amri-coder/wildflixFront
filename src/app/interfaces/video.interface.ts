import { Category } from "./category.interface";

export interface video {
    id: number;
    title: String;
    description: String;
    url: String;
    releaseDate: Date;
    categories: Category[];
    private: boolean;

}