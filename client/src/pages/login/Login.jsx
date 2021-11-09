import React,{useState} from 'react'
import { useStyles } from './style'
import logo from '../../images/logo-app.svg'
import TextField from '@material-ui/core/TextField';
// Redux
import { login } from '../../redux/actions/authAction'
import { useDispatch } from 'react-redux'

function Login() {
    const classes = useStyles();
    const [userData,setUserData] = useState({ email:'', password:'' })

    const dispatch = useDispatch()

    // Handle Change value
    const handleChangeInput = e => {
        const value = e.target.value
        setUserData({...userData,[e.target.name]:value})
    }
    
    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className={classes.container}>
        <div className={classes.loginContainer}>
            <div className={classes.introduce}>
                <img className={classes.logo}  src={logo} alt="logo" />
                <h3 className={classes.slogan}>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h3>
            </div>
            <div className={classes.formLogin}>
                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                    <TextField 
                      className={classes.email} 
                      label="Email hoặc số điện thoại" 
                      onChange={handleChangeInput}
                      value={userData.email}
                      name='email'
                      variant="outlined" />
                    <TextField 
                      className={classes.password}
                      label="Mật khẩu"  type="password"
                      value={userData.password}
                      name='password'
                      onChange={handleChangeInput}
                      variant="outlined" />
                    <button 
                      className={classes.login}>
                        Đăng nhập
                    </button>
                    <span className={classes.recorved}>Quên mật khẩu?</span>
                </form>
                <button className={classes.create}>Tạo tài khoản mới</button>
            </div>
        </div>
        </div>
    )
}

export default Login
