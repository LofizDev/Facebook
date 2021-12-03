export const checkImage = (file) => {
    let error = ''
    if (!file) return error = "Định dạng không đúng vui lòng chọn file ảnh"

    if (file.size > 1920 * 1080)
        error = 'Kích thước quá lớn, vui lòng chọn lại'

    if (file.type !== 'image/png' && file.type !== 'image/webp' && file.type !== 'image/jpg' && file.type !== 'image/jpeg')
        error = 'Không thể tỉa lên ảnh của bạn.Ảnh phải nhỏ hơn 4 MB và được lưu dưới dạng tệp JPG, JPEG, PNG, GIF, hoặc Webp'

    return error
}