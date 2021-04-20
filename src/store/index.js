import {createStore} from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        developer: 'Petro Ivanov',
        id: 3,
        devTasks: [
          {
            taskId: 'DS-532',
            taskTitle: 'WalmartToGo',
            taskStatus: 'done',
            workbenchLink: 'https://google.com.ua'
          },
          {
            taskId: 'DS-42152',
            taskTitle: 'Amazon',
            taskStatus: 'active',
            workbenchLink: 'https://google.com.ua'
          },
          {
            taskId: 'DS-13245',
            taskTitle: 'OzonRu',
            taskStatus: 'incoming',
            workbenchLink: 'https://google.com.ua'
          }
        ]
      },
      {
        developer: 'Nazar Kovalenko',
        id: 1,
        devTasks: [
          {
            taskId: 'DS-35324',
            taskTitle: 'WalmartToGo',
            taskStatus: 'done',
            workbenchLink: 'https://google.com.ua',
          },
          {
            taskId: 'DS-421152',
            taskTitle: 'Amazon',
            taskStatus: 'active',
            workbenchLink: 'https://google.com.ua',
          },
          {
            taskId: 'DS-12445',
            taskTitle: 'OzonRu',
            taskStatus: 'incoming',
            workbenchLink: 'https://google.com.ua'
          }
        ]
      },
      {
        developer: 'Roman Banderovski',
        id: 2,
        devTasks: [
          {
            taskId: 'DS-1324',
            taskTitle: 'Rozetka',
            taskStatus: 'done',
            workbenchLink: 'https://google.com.ua'
          },
          {
            taskId: 'DS-1252',
            taskTitle: 'eBuy',
            taskStatus: 'active',
            workbenchLink: 'https://google.com.ua'
          },
          {
            taskId: 'DS-2245',
            taskTitle: 'PromUa',
            taskStatus: 'incoming',
            workbenchLink: 'https://google.com.ua'
          }
        ]
      }
    ],
    statuses: [
      { name: "Active", value: 'active' },
      { name: "Done", value: 'done' },
      { name: "Incoming", value: 'incoming' }
    ],
    developers: []
  },
  mutations: {
    addTask (state, payload) {
      for (const dev of state.tasks) {
        if (dev.id === payload.id) {
          dev.devTasks = [...dev.devTasks, ...payload.devTasks];
          return;
        }
      }

      state.tasks.push(payload)
    },

    addDevelopers (state, payload) {
      state.developers = payload;
    }
  },
  actions: {
  },
  getters: {
    getTask: (state) => id => {
      return state.tasks.find(value => value.devTasks.some(value1 => value1.taskId === id))
          .devTasks.find(value => value.taskId === id);
    },

    getFilteredTask: state => (searchTerm, developerId, status) => {
      console.log(developerId)
      if (searchTerm || developerId || status) {
        return state.tasks.map(dev => {
          return {
            ...dev,
            devTasks: dev.devTasks
              .filter(task => task.taskTitle.toLowerCase().includes(searchTerm.toLowerCase()))
              .filter(task2 => !status ? true : task2.taskStatus === status)
          };
        }).filter(dev2 => !developerId ? true : dev2.id === developerId)
      } else {
        return state.tasks
      }
    }
  },
  modules: {
  }
})
