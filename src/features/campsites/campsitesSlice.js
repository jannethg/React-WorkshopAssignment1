import {CAMPSITES} from '../../App/shared/CAMPSITES';

//return an entire array of campsites. 
export const selectAllCampsites = () => {
    return CAMPSITES;
}; 

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}