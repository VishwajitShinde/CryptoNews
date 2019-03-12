export default class Article{

    date: string;
    keywords: [];
    image: string;
    text: string;
    title: string;
    url: string;
    authors: [];

    constructor(){

    }
    
    create(articleJson){
        this.date = articleJson["date"];
        this.keywords = articleJson["keywords"];
        this.image = articleJson["image"];
        this.text = articleJson["text"];
        this.title = articleJson["title"];
        this.url = articleJson["url"];
        this.authors = articleJson["authors"];
    }
}