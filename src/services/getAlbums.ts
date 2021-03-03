import { api } from "../api";

export interface ApiAlbums {
    userId: number;
    id: number;
    title: string;
}

const getAlbums = async (): Promise<ApiAlbums[]> => {
    const response = await api.get<ApiAlbums[]>(`/albums`, {})
    return response.data;
}

export default getAlbums;