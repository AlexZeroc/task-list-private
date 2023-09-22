const addStructure = (arr) => {
  const partialStructure = [];
  const fullStructure = [];
  arr.forEach((obj) => {
    if (obj.priority === 1) {
      return partialStructure.push({
        ...obj,
        priorityText: "Low",
        priorityColor: "colorLow",
      });
    } else if (obj.priority === 2) {
      return partialStructure.push({
        ...obj,
        priorityText: "Medium",
        priorityColor: "colorMedium",
      });
    } else if (obj.priority === 3) {
      partialStructure.push({
        ...obj,
        priorityText: "High",
        priorityColor: "colorHigh",
      });
    }
  });
  partialStructure.forEach((obj) => {
    if (obj.status === 1) {
      return fullStructure.push({
        ...obj,
        statusText: "Done",
        statusProgress: 69.115,
      });
    } else if (obj.status === 2) {
      return fullStructure.push({
        ...obj,
        statusText: "In process",
        statusProgress: 34.5575,
      });
    } else if (obj.status === 3) {
      return fullStructure.push({
        ...obj,
        statusText: "To do",
        statusProgress: 0,
      });
    }
  });
  return fullStructure;
};

export default addStructure;
