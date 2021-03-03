import { api } from "../api";

export interface ApiPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getPosts = async (): Promise<ApiPosts[]> => {
    const response = await api.get<ApiPosts[]>(`/posts`, {})
    return response.data;
}

export default getPosts;