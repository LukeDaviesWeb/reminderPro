import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constant.js';


export const addReminder = (text, dueDate) => {
	const action = {
		type: ADD_REMINDER,
		text: text,
		dueDate : dueDate
	}

	console.log('action in addReminder', action);
	return action;
}



export const deleteReminder = (id) => {
	const action = {
		type: DELETE_REMINDER,
		id : id
	}

	console.log('deleting in actions', action);
	return action;
}

export const clearReminders = () => {
	return {
		type : CLEAR_REMINDER
	}
}