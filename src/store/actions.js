/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-02 17:19:07
 * @LastEditTime: 2019-10-12 15:07:53
 * @LastEditors: Lin Changkun
 */
export const setIsAuthenticated = ({ commit }, data) => {
  commit("setIsAuthenticated", data);
};

export const setUser = ({ commit }, data) => {
  commit("setUser", data);
};

export const setPosition = ({ commit }, data) => {
    commit("setPosition", data);
  };

  export const setInputVal = ({ commit }, data) => {
    commit("setInputVal", data);
  };

  export const setSearchResults = ({ commit }, data) => {
    commit("setSearchResults", data);
  };

  export const setServiceDetail = ({ commit }, data) => {
    commit("setServiceDetail", data);
  };
