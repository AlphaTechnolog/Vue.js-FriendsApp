import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	friends: new Array()
  },
  mutations: {
  	saludarAmigos(state) {
  		for (let i=0;i<state.friends.length;i++) {
  			alert("Hello " + state.friends[i]);
  		}
  	},
  	agregarAmigos(state, friend) {
  		state.friends.push(friend);
  		alert("Your friend " + friend + " has been added successfully to the friends list");
  	},
  	eliminarAmigos(state, friend) {
  		const buscar = (property) => {
  			return state.friends.indexOf(property);
  		}

  		let position = buscar(friend);

  		if (position == -1) {
  			// No existe
  			alert("The searched friend has been not found, searched friend: " + friend);
  		} else {
  			// Existe
  			state.friends.splice(position, 1);
  		}
  	},
    eliminarTodos(state) {
      state.friends = new Array();
    }
  },
  actions: {
  },
  modules: {
  }
})
