import {createStore} from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        developer: 'Petro',
        devTasks: [
          {
            taskId: 'DS-532',
            taskTitle: 'WalmartToGo',
            taskStatus: 'done'
          },
          {
            taskId: 'DS-42152',
            taskTitle: 'Amazon',
            taskStatus: 'active',
          },
          {
            taskId: 'DS-13245',
            taskTitle: 'OzonRu',
            taskStatus: 'incoming'
          }
        ]
      },
      {
        developer: 'Nazar',
        devTasks: [
          {
            taskId: 'DS-35324',
            taskTitle: 'WalmartToGo',
            taskStatus: 'done'
          },
          {
            taskId: 'DS-421152',
            taskTitle: 'Amazon',
            taskStatus: 'active',
          },
          {
            taskId: 'DS-12445',
            taskTitle: 'OzonRu',
            taskStatus: 'incoming'
          }
        ]
      },
      {
        developer: 'Roman',
        devTasks: [
          {
            taskId: 'DS-1324',
            taskTitle: 'Rozetka',
            taskStatus: 'done',
          },
          {
            taskId: 'DS-1252',
            taskTitle: 'eBuy',
            taskStatus: 'active',
          },
          {
            taskId: 'DS-2245',
            taskTitle: 'PromUa',
            taskStatus: 'incoming'
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getTask: (state) => id => {
      return state.tasks.find(value => value.devTasks.some(value1 => value1.taskId === id))
          .devTasks.find(value => value.taskId === id);
    },

    getFilteredTask: state => (searchTerm, developerName) => {
      console.log(developerName)
      if (searchTerm || developerName) {
        return state.tasks.map(dev => {
          return {
            ...dev,
            devTasks: dev.devTasks.filter(task => task.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()))
          };
        }).filter(dev2 => !developerName ? true : dev2.developer === developerName)
      } else {
        return state.tasks
      }
    }
  },
  modules: {
  }
})
