import { address } from "../../utils";
import { ADD_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS } from "./types";

export const addAddress = (addressDetail: address) => ({
    type: ADD_ADDRESS,
    payload: { addressDetail }
});

export const deleteAddress = (addressIndex: number) => ({
    type: DELETE_ADDRESS,
    payload: {
        addressIndex
    }
});

export const updateAddress = (addressDetail: address, addressIndex: number) => ({
    type: UPDATE_ADDRESS,
    payload: { addressDetail, addressIndex }
});