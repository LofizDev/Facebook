export const GLOBALTYPES = {
    AUTH: "AUTH",
    ALERT: "ALERT",
    STATUS: "STATUS"
}

export const EditData = (data, id, post) => {
    const newData = data.map(item => item._id !== id)
    return newData
}

// Removed duplicated user
export const DeleteData = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return newData
}
