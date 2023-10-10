const priorityToLabelText = {
	1: "Low",
	2: "Medium",
	3: "High"
};

const priorityToColorMap = {
	1: "colorLow",
	2: "colorMedium",
	3: "colorHigh"
};

const statusToTextMap = {
	1: "Done",
	2: "In process",
	3: "To do"
};

const statusToProgressMap = {
	1: 69.115,
	2: 34.5575,
	3: 0
};

const setTaskDataStructure = (arr) => {
	const dataTask = arr.map((obj) => {
		return {
			...obj,
			priorityText: priorityToLabelText[obj.priority],
			priorityColor: priorityToColorMap[obj.priority] ,
			statusText: statusToTextMap[obj.status],
			statusProgress: statusToProgressMap[obj.status],
		};
	});

	return dataTask;
};

export default setTaskDataStructure ;
