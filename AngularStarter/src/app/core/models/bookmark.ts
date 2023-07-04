export interface BookmarkAdd {
    title: string;
    link: string;
    videoUrl: string;
    description: string;
    content: string;
    pubDate: string;
    image_Url: string;
    source_Id: string;
    creator: string[];
}


export interface BookmarkReturn {
    id: number;
    title: string;
    link: string;
    videoUrl: string;
    description: string;
    content: string;
    pubDate: string;
    image_Url: string;
    source_Id: string;
    creator: string;
}