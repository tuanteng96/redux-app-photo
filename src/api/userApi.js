import axiosClient from "./axiosClient";

const UserApi = {
    login: (params) => {
        const url = '/app/index.aspx';
        return axiosClient.get(url, { params });
    },
    logout: (params) => {
        const url = '/app/index.aspx';
        return axiosClient.get(url, { params });
    },
    getUser: () => {
        const url = '?cmd=authen&USN=0971021196&PWD=1234';
        return axiosClient.get(url);
    }
}

export default UserApi;