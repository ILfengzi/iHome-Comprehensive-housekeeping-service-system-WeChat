/*
 * @Description: 
 * @Author: Lin Changkun
 * @Date: 2019-10-02 17:19:07
 * @LastEditTime: 2019-11-01 17:48:35
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

export const setFakeId = ({ commit }, data) => {
  commit("setFakeId", data);
};

export const setOrderForm = ({ commit }, data) => {
  commit("setOrderForm", data);
};

export const setUserAddress = ({ commit }, data) => {
  commit("setUserAddress", data);
};

export const setOrderDetail = ({ commit },data) => {
  commit("setOrderDetail",data);
};

export const setOldUserAddress = ({ commit },data) => {
  commit("setOldUserAddress",data);
};

export const setIsNewAddress = ({ commit },data) => {
  commit("setIsNewAddress",data);
};

export const setShowModel = ({ commit },data) => {
  commit("setShowModel",data);
};

export const setOrderId = ({ commit },data) => {
  commit("setOrderId",data);
};

export const setHavePhone = ({ commit },data) => {
  commit("setHavePhone",data);
};