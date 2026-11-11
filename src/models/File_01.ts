export interface musicGlossary {
    id: string;
    name: string;
    category?: string;
    year?: number;
    description?: string;
    dateReleased?: string;
    img: string;
    streamUrl?: string;
    tags?: string;
    country?: string;
}
interface wrapper<K>{
    value: K;
}
type MusicWrapper = wrapper<musicGlossary>