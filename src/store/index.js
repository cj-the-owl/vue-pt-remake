import { createStore } from 'vuex'

export default createStore({
  state: {
    properties: null,
    property: null,
    user: null,
    asc: true,
  },
  
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setProperties: (state, properties) => {
      state.properties = properties;
    },
    setProperty: (state, property) => {
      state.property = property;
    },
    sortPropertiesByPrice: (state) => {
      state.properties.sort((a, b))
    }
  },
  actions: {
  },
  
})
