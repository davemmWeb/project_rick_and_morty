import axios from "axios";
import { SET_ALL_CHARACTERS, SET_FAVORITES } from "./slice";

const URL = "https://rickandmortyapi.com/api/character";

export const get_all_characters = () => async (dispatch: any) => {
    try {
        let res = await axios.get(`${URL}`);
        dispatch(SET_ALL_CHARACTERS(res.data))
    } catch (error: any) {
        console.log(error.message);
    }
};

export const set_favorite = (character) => async (dispatch: any) => {
    try {
        let res = await axios.get(`${URL}/${character.id}`);
        dispatch(SET_FAVORITES(res.data))
    } catch (error: any) {
        console.log(error.message);
    }
}

