import React, { useState, useEffect } from 'react'
import { useStyles } from './style'
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link, useHistory } from 'react-router-dom'
import { register } from '../../redux/actions/authAction'
import { useSelector, useDispatch } from 'react-redux'

function Register() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        fullname: '', username: '', email: '', password: '', cfpassword: '', gender: 'male'
    })

    const { auth, alert } = useSelector(state => state)
    const history = useHistory()

    // Hanlde change input
    const handleChangeInput = (e) => {
        const value = e.target.value
        setUserData({ ...userData, [e.target.name]: value })
    }

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(userData))
    }

    // Check correct router
    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])


    return (
        <div className={classes.registerContainer}>
            <form
                onSubmit={handleSubmit}
                className={classes.form} noValidate autoComplete="off">
                <h1>Đăng ký</h1>
                <span style={{ marginBottom: '10px', color: '#606770' }}>Nhanh chóng và dễ dàng</span>
                <TextField
                    className={clsx(classes.input, classes.fullname)}
                    label="Họ và tên"
                    onChange={handleChangeInput}
                    value={userData.fullname}
                    name='fullname'
                    error={alert.fullname ? true : false}
                    variant="outlined" />
                    <p className={classes.error}>{alert.fullname}</p>
                <TextField
                    className={clsx(classes.input, classes.username)}
                    label="User Name"
                    value={userData.username}
                    name='username'
                    onChange={handleChangeInput}
                    error={alert.username ? true : false}
                    variant="outlined" />
                    <p className={classes.error}>{alert.username}</p>
                <TextField
                    className={clsx(classes.input, classes.email)}
                    label="Email"
                    value={userData.email}
                    name='email'
                    error={alert.email ? true : false}
                    onChange={handleChangeInput}
                    variant="outlined" />
                    <p className={classes.error}>{alert.email}</p>
                <TextField
                    className={clsx(classes.input, classes.password)}
                    label="Mật khẩu" type="password"
                    value={userData.password}
                    name='password'
                    error={alert.password ? true : false}
                    onChange={handleChangeInput}
                    variant="outlined" />
                    <p className={classes.error}>{alert.password}</p>
                <TextField
                    className={clsx(classes.input, classes.cfpassword)}
                    label="Nhập lại mật khẩu" type="password"
                    value={userData.cfpassword}
                    name='cfpassword'
                    error={alert.cfpassword ? true : false}
                    onChange={handleChangeInput}
                    variant="outlined" />
                    <p className={classes.error}>{alert.cfpassword}</p>
                <FormControl component="fieldset">
                    <RadioGroup
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        value={userData.gender}
                        onChange={handleChangeInput}>
                        <FormControlLabel name='gender' value="male" control={<Radio />} label="Nam" />
                        <FormControlLabel name='gender' value="female" control={<Radio />} label="Nữ" />
                        <FormControlLabel name='gender' value="other" control={<Radio />} label="Khác" />
                    </RadioGroup>
                </FormControl>
                <button className={classes.create}>Đăng ký</button>
                <div style={{ display: 'flex' }}>
                    <span className={classes.recorved}>Bạn đã có tài khoản?</span>
                    <Link to='/login'>
                        <p style={{ color: 'red', marginLeft: '5px' }}>Đăng nhập</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register