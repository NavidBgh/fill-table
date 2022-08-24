import { ADD_ADDRESS, DELETE_ADDRESS, FETCH_ADDRESS, UPDATE_ADDRESS } from "./types";

export const addAddress = (addressDetail: any) => ({
    type: ADD_ADDRESS,
    payload: { addressDetail }
});

export const deleteAddress = (addressIndex: number) => ({
    type: DELETE_ADDRESS,
    payload: {
        addressIndex
    }
});

export const updateAddress = (addressDetail: any, addressIndex: number) => ({
    type: UPDATE_ADDRESS,
    payload: { addressDetail, addressIndex }
});