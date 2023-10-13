import TaskContext from "../store/task-list";

import {useContext, useEffect, useState} from "react";



export const useFetchAddTask = () => {
    const {addTask} = useContext(TaskContext);
    return addTask;
};


export const useFetchDelete = () => {
    const {deleteTask} = useContext(TaskContext);
    return deleteTask;
};


export const useFetchIsTask = (id) => {
    const {setDataTask} = useContext(TaskContext);
    const [dataDetail, setDataDetail] = useState(setDataTask);
    useEffect(() => {
		const resolve = setDataTask(id);
		setDataDetail(resolve);
	}, [id, setDataTask]);
    return dataDetail;
};

export const useFetchPostTaskList = () => {
    const {editedTask} = useContext(TaskContext);

    return editedTask;
};


export const useFetchStatus = () => {
    const {setTaskStatus} = useContext(TaskContext);

    return setTaskStatus;
};


export const useFetchTaskList = () => {
    const {dataTask} = useContext(TaskContext);
    const [data, setData] = useState(dataTask);
    useEffect(() => {
		const resolve = dataTask;
		setData(resolve);
	}, [setData, dataTask]
	);

    return data;
};
