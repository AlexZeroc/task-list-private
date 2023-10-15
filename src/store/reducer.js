import setTaskDataStructure from "./setTaskDataStructure";

const reducer = (state, { type, task }) => {
  switch (type) {
    case "add": {
      return setTaskDataStructure([task, ...state]);
    }

    case "edit": {
      const setIsTaskData = state.map((elementTask) => {
        if (elementTask.id === task.id) {
          return {
            ...elementTask,
            name: task.name,
            priority: task.priority,
          };
        } else {
          return { ...elementTask };
        }
      });

      return setTaskDataStructure(setIsTaskData);
    }

    case "delete": {
      const setIsTaskData = state.filter((obj) => obj.id !== task);

      return [...setIsTaskData];
    }

    case "setStatus": {
      const setIsStatusTask = state.map((obj) => {
        if (obj.id === task) {
          if (obj.status <= 2) {
            return { ...obj, status: obj.status + 1 };
          } else {
            return { ...obj, status: 1 };
          }
        } else {
          return obj;
        }
      });
      return setTaskDataStructure(setIsStatusTask);
    }

    default: {
      throw new Error();
    }
  }
};

export default reducer;
