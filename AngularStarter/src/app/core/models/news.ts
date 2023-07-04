

    export interface News {
        title: string;
        link: string;
        keywords: string[];
        creator: string[];
        video_url?: string;
        description: string;
        content: string;
        pubDate: string;
        image_url: string;
        source_id: string;
    }

    export interface NewsResult {
        status: string;
        totalResults: number;
        results: News[];
        nextPage: number;
    }



