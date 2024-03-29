import axios from "axios";
import { SET_ALL_CHARACTERS, SET_FAVORITES, DELETE_FAVORITE, FILTER_CARDS } from "./slice";

const URL = "https://rickandmortyapi.com/api/character";

export const get_all_characters = () => async (dispatch: any) => {
    try {
        let res = await axios.get(`${URL}`);
        dispatch(SET_ALL_CHARACTERS(res.data.results))
    } catch (error: any) {
        console.log(error.message);
    }
};

export const set_favorite = (id) => async (dispatch: any) => {
    try {
        let res = await axios.get(`${URL}/${id}`);
        dispatch(SET_FAVORITES(res.data))
    } catch (error: any) {
        console.log(error.message);
    }
}

export const delete_favorite = (id) => (dispatch: any) => {
    dispatch(DELETE_FAVORITE(id))
}

export const filter_cards = (value) => (dispatch: any) => {
    dispatch(FILTER_CARDS(value))
}

