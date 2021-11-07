import React from 'react'
import { useStyles } from './style'
import logo from '../../images/logo-app.svg'
import TextField from '@material-ui/core/TextField';
function Login() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <div className={classes.loginContainer}>
            <div className={classes.introduce}>
                <img className={classes.logo}  src={logo} alt="logo" />
                <h3 className={classes.slogan}>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h3>
            </div>
            <div className={classes.formLogin}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField className={classes.email} label="Email hoặc số điện thoại" variant="outlined" />
                    <TextField className={classes.password} label="Mật khẩu" variant="outlined" />
                    <button className={classes.login}>Đăng nhập</button>
                    <span className={classes.recorved}>Quên mật khẩu?</span>
                </form>
                <button className={classes.create}>Tạo tài khoản mới</button>
            </div>
        </div>
        </div>
    )
}

export default Login
