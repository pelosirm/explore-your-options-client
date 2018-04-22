export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const displayMessage = (message) => ({
	type: DISPLAY_MESSAGE, 
	message
})

export const HIDE_DISPLAY_MESSAGE = 'HIDE_DISPLAY_MESSAGE';
export const hideDisplayMessage = (message) => ({
	type: HIDE_DISPLAY_MESSAGE, 
	message
})

export const displayMessageTimer = (message)=>dispatch=>{
	dispatch(displayMessage(message))
	setTimeout(() => {
  		dispatch(hideDisplayMessage())
	}, 3000)
	
}