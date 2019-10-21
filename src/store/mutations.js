/*
 * @Description: 
 * @Author:  Lin Changkun
 * @Date: 2019-10-02 17:19:49
 * @LastEditTime: 2019-10-21 19:59:14
 * @LastEditors: Lin Changkun
 */
export const setIsAuthenticated = (state, data) => {
    state.isAuthenticated = data;
};

export const setUser = (state, data) => {
    state.user = data;
};

export const setPosition = (state, data) => {
    state.position = data;
};

export const setInputVal = (state, data) => {
    state.inputVal = data;
};

export const setSearchResults = (state, data) => {
    state.searchResults = data;
};

export const setServiceDetail = (state, data) => {
    state.serviceDetail = data;
};

export const setFakeId = (state, data) => {
    state.fakeId = data;
};

export const setOrderForm = (state, data) => {
    state.orderForm = data;
};

export const setUserAddress = (state, data) => {
    state.userAddress = data;
};
