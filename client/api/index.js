import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listHousings() {
        return axios.get(`${apiPrefix}/housing`);
    },

    createHousing(data) {
        return axios.post(`${apiPrefix}/housing`, data);
    },

    updateHousing(data, housingId) {
        return axios.put(`${apiPrefix}/housing/${housingId}`, data);
    },

    deleteHousing(housingId) {
        return axios.delete(`${apiPrefix}/housing/${housingId}`);
    },
///
    listFloors() {
        return axios.get(`${apiPrefix}/floor`);
    },

    createFloor(data) {
        return axios.post(`${apiPrefix}/floor`, data);
    },

    deleteFloor(floorId) {
        return axios.delete(`${apiPrefix}/floor/${floorId}`);
    },

    updateFloor(data, floorId) {
        return axios.put(`${apiPrefix}/floor/${floorId}`, data);
    },
///
    listClassrooms() {
        return axios.get(`${apiPrefix}/classroom`);
    },

    createClassroom(data) {
        return axios.post(`${apiPrefix}/classroom`, data);
    },

    deleteClassroom(classroomId) {
        return axios.delete(`${apiPrefix}/classroom/${classroomId}`);
    },

    updateClassroom(data, classroomId) {
        return axios.put(`${apiPrefix}/classroom/${classroomId}`, data);
    },
}
