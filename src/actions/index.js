/*
* Action types
*/

// Filter

export const SET_FILTER = "SET_FILTER";

// Todo items

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


/*
* Other constants
*/

export const filters = {
    ALL: "all",
    DONE: "done",
    UNDONE: "undone"
};


/*
* Action creators
*/

// Filter

export const setFilter = filter => {
    return { type: ADD_TODO, text };
};

// Todo items

export const addToDo = text => {
    return { type: ADD_TODO, text };
};

export const updateToDo = (uuid, text) => {
    return { type: UPDATE_TODO_TEXT, uuid, text };
};

export const removeToDo = uuid => {
    return { type: REMOVE_TODO, uuid };
};

export const toggleToDo = uuid => {
    return { type: TOGGLE_TODO, uuid };
};


