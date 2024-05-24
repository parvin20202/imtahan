import axios from "axios";
import { BASE_URL } from "./constant";

export async function getAllData() {
    try {
        const response = await axios(`${BASE_URL}/restourants`);

        return response;
    } catch (error) {
        console.log(error);
    }
}
export async function getDataById(id) {
    try {
        const response = await axios(`${BASE_URL}/restourants/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}