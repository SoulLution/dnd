const state = () => ({
  items: 
  localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : 
  [
    [
      {
        id: 1,
        title: 'test',
        discription: 'test'
      },
    ],
    [
      {
        id: 2,
        title: 'Lorem',
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'"
      }
    ],
    [],
    []
  ]
})

const getters = {
  getItems: (state, getters, rootState) => {
    return state.items
  }
}

const actions = {
  addItem ({ state, commit }, cart) {
    let id = 0
    state.items.forEach(x => {
      if(x.length){
        let sortid = x.sort((a, b) => b.id - a.id)[0].id
        if(id < sortid)
          id = sortid
      }
    })
    commit('addItem', {
      id: id + 1,
      title: cart.title,
      discription: cart.discription
    })
  },
  changeItem ({ state, commit }, cart) {
    commit('changeItem', {
      col: cart.col,
      index: cart.index,
      title: cart.title,
      discription: cart.discription
    })
  },
  removeItem ({ state, commit }, data) {
    commit('removeItem', { 
      col: data.col, 
      id: data.id
    })
  },
  moveItem ({ state, commit }, data) {
    commit('moveItem', {
      index: data.index,
      newPos: data.newPos,
      newCol:data.newCol,
      prevCol:data.prevCol
    })
  }
}

const mutations = {
  addItem (state, { id, title, discription }) {
    state.items[0].push({
      id,
      title,
      discription,
    })
    localStorage.setItem('carts', JSON.stringify(state.items))
  },
  changeItem (state, { col, index, title, discription }) {
    state.items[col][index].title = title
    state.items[col][index].discription = discription
    localStorage.setItem('carts', JSON.stringify(state.items))
  },
  removeItem (state, { col, id }) {
    let find = state.items[col].findIndex(x => x.id === id)
    if (find !== -1) {
      state.items[col].splice(find, 1)
    }
    localStorage.setItem('carts', JSON.stringify(state.items))
  },
  moveItem (state, { index, newPos, newCol, prevCol}) {
    if(newCol === prevCol){
      let backup = state.items[newCol][index]
      state.items[newCol].splice(index, 1)
      if(index < newPos){
        state.items[newCol].splice(newPos-1, 0, backup)
      } else{
        state.items[newCol].splice(newPos, 0, backup)
      }
    }
    else{
      let backup = state.items[prevCol][index]
      state.items[prevCol].splice(index, 1)
      state.items[newCol].splice(newPos, 0, backup)

    }
    localStorage.setItem('carts', JSON.stringify(state.items))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
