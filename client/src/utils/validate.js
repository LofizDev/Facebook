   const validate = ({ fullname, username, email, password, cfpassword }) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Vui lòng nhập họ tên của bạn."
    }else if(fullname.length > 25){
        err.fullname = "Họ tên không được quá 25 kí tự."
    }

    if(!username) {
        err.username = "Vui lòng nhập username của bạn."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "Username không được quá 25 kí tự."
    }

    if(!email) {
        err.email = "Vui lòng thêm email của bạn."
    }else if(!validateEmail(email)){
        err.email = "Email không đúng định dạng."
    }

    if(!password) {
        err.password = "Vui lòng nhập mật khẩu."
    }else if(password.length < 6){
        err.password = "Mật khẩu phải ít nhất 6 kí tự."
    }

    if(password !== cfpassword) {
        err.cfpassword = "Mật khẩu phải trùng khớp."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}


function validateEmail(email) {
    const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(email);
}

export default validate