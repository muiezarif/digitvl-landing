import novamdigital from "../api/novamdigital";
import * as TYPES from "../actions/types"
export const getDTreePublicProfileLinks = (data) =>{
    return async (dispatch) => {
        const response = await novamdigital.get(`/link-tree/${data}/link/`);
        dispatch({type:TYPES.DTREE_PUBLIC_LINK_GET,payload:response.data})
    }
}