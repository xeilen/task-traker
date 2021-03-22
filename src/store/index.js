import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        developer: 'Nazar',
        devTasks: [
          {
            taskId: 'DS-5324',
            taskTitle: 'WalmartToGo',
            taskStatus: 'done'
          },
          {
            taskId: 'DS-4252',
            taskTitle: 'Amazon',
            taskStatus: 'active',
          },
          {
            taskId: 'DS-1245',
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
      const dev = state.tasks.find(value => value.devTasks.some(value1 => value1.taskId === id))
        .devTasks.find(value => value.taskId === id)
      return dev;
    }
  },
  modules: {
  }
})
