import axiosClient from "./axiosClient";

const ProductApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, {
            params,
            // headers: {
            //     "test" : "test"
            // },
            // baseURL: "https://google.com"
        });
    },
    getCateToID: (id) => {
        const url = `app/index.aspx?cmd=cate_parentid&id=${id}`;
        return axiosClient.get(url);
    }
}

export default ProductApi;