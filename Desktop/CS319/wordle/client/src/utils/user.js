const axios = require('axios')

export const registerUser = async (username, password) => {
	try {
		const res = await axios.get(
			`http://${
				process.env.DOMAIN || 'localhost'
			}:8080/registeruser?username=${username}&password=${password}&createdAt=${new Date()
				.toISOString()
				.slice(0, 10)}`
		)
		return res.data
	} catch (err) {
		return
	}
}

export const loginUser = async (username, password) => {
	try {
		const res = await axios.get(
			`http://${
				process.env.DOMAIN || 'localhost'
			}:8080/loginuser?username=${username}&password=${password}`
		)
		return res.data
	} catch (err) {
		return
	}
}

export const getCreatedAtDate = async (username) => {
	try {
		const date = await axios.get(
			`http://c${
				process.env.DOMAIN || 'localhost'
			}:8080/getcreatedat?username=${username}`
		)
		return date.data
	} catch (err) {
		return new Date().toISOString().slice(0, 10)
	}
}
