import { API_HOST } from '../utils/constants';

export async function getMagosApi() {
    try {
        const url = `${API_HOST}/hechizos?limit=10&offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getMagosDetailsByUrlApi() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}