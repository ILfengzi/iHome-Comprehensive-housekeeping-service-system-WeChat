/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-02 17:19:49
 * @LastEditTime: 2019-10-05 00:11:43
 * @LastEditors: Lin Changkun
 */
export const setIsAuthenticated = (state, data) => {
    state.isAuthenticated = data;
};

export const setUser = (state, data) => {
    state.user = data;
};

export const setOpenId = (state, data) => {
    state.openId = data;
};

export const setPosition = (state, data) => {
    state.position = data;
};