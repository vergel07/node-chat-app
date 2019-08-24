const users = []

// Add user
const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and Room are required!'
        }
    }

    // Check for Existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

// Removing user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// Getting user
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// Gettings users in the room
const getUserInRoom = (room) => {
    return users.filter((user) => user.room === room.trim().toLowerCase())
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}