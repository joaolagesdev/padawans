import { api } from "../api";

export interface ApiToDos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getToDos = async (): Promise<ApiToDos[]> => {
    const response = await api.get<ApiToDos[]>(`/todos`, {})
    return response.data;
}

export default getToDos;