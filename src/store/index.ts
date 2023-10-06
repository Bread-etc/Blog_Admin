import { defineStore } from 'pinia';
// id: 必须唯一
export const useIndexStore = defineStore('index', {
  // 相当于vue的data
  state: () => {
    return {}
  },

  // 相当于vue的compute，在getters中使用了this则必须手动指定返回值类型，否则类型推导不出来
  getters: {},

  // 相当于vue的method，在actions中不能使用箭头函数，因为箭头函数绑定外部this
  actions: {}
});
