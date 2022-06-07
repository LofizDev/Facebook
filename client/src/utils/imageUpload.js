export const checkImage = (file) => {
    let error = ''
    if (!file) return error = "Định dạng không đúng vui lòng chọn file ảnh"

    if (file.size > 1920 * 1080)
        error = 'Kích thước quá lớn, vui lòng chọn lại'

    if (file.type !== 'image/png' && file.type !== 'image/webp' && file.type !== 'image/jpg' && file.type !== 'image/jpeg')
        error = 'Không thể tỉa lên ảnh của bạn.Ảnh phải nhỏ hơn 4 MB và được lưu dưới dạng tệp JPG, JPEG, PNG, GIF, hoặc Webp'

    return error
}

export const imageUpload = async (images) => {
    let listImage = []
    for (let item of images) {
        const formData = new FormData()
        // Check image of post or avatar
        if (item.camera) {
            formData.append('file', item.camera)
        } else {
            formData.append('file', item)
        }

        formData.append('upload_preset', 'qfdtic7y')
        formData.append('cloud_name', 'dqqb7rtvm')

        const res = await fetch('https://api.cloudinary.com/v1_1/dqqb7rtvm/image/upload', {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        listImage.push({ public_id: data.public_id, url: data.secure_url })
    }
    return listImage
}



export const updloadSingleFile = async (image) => {
    const formData = new FormData();
    formData.append('file', image)
    formData.append('upload_preset', 'qfdtic7y')
    formData.append('cloud_name', 'dqqb7rtvm')

    const res = await fetch('https://api.cloudinary.com/v1_1/dqqb7rtvm/image/upload', {
        method: 'POST',
        body: formData
    })

    return res;
};