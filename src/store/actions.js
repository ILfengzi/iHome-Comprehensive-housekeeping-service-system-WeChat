/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-02 17:19:07
 * @LastEditTime: 2019-10-05 00:12:46
 * @LastEditors: Lin Changkun
 */
export const setIsAuthenticated = ({ commit }, data) => {
  commit("setIsAuthenticated", data);
};

export const setUser = ({ commit }, data) => {
  commit("setUser", data);
};

export const setOpenId = ({ commit }, data) => {
  commit("setOpenId", data);
};

export const setPosition = ({ commit }, data) => {
    commit("setPosition", data);
  };
