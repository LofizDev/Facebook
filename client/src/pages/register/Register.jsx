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
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
function Register() {
    const classes = useStyles();
    const dispatch = useDispatch()
    // const [userData, setUserData] = useState({
    //     fullname: '', username: '', email: '', password: '', cfpassword: '', gender: 'male'
    // })

    const { auth, alert } = useSelector(state => state)
    const history = useHistory()
    const initialValues = {
        fullname: '',
        email: '',
        username: '',
        password: '',
        cfpassword:''
    }
    // // Hanlde change input
    // const handleChangeInput = (e) => {
    //     const value = e.target.value
    //     setUserData({ ...userData, [e.target.name]: value })
    // }

    // // Handle submit
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(register(userData))
    // }

    // Check correct router
    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const onSubmit = (values) => {
        alert(JSON.stringify(values), null, 2)  
    }
   
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().min(3, "It's too short").required("Required"),
        username: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8").required('Required'),
        cfpassword: Yup.number().typeError("Enter valid Phone number").required("Required"),
    })
  
    return (
        <div className={classes.registerContainer}>
             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
            <form
                onSubmit={onSubmit}
                className={classes.form} noValidate autoComplete="off">
                <h1>Đăng ký</h1>
                <span style={{ marginBottom: '10px', color: '#606770' }}>Nhanh chóng và dễ dàng</span>
                <TextField
                    className={clsx(classes.input, classes.fullname)}
                    label="Họ và tên"
                    name='fullname'
                    error={props.errors.fullname && props.touched.fullname}
                    helperText={<ErrorMessage fullname='fullname' />} required 
                    variant="outlined" />
                    {/* <p className={classes.error}>{alert.fullname}</p> */}
                <TextField
                    className={clsx(classes.input, classes.username)}
                    label="User Name"
                    // value={userData.username}
                    name='username'
                    error={props.errors.username && props.touched.username}
                    helperText={<ErrorMessage username='username' />} required 
                    variant="outlined" />
                    {/* <p className={classes.error}>{alert.username}</p> */}
                <TextField
                    className={clsx(classes.input, classes.email)}
                    label="Email"
                    // value={userData.email}
                    name='email'
                    error={props.errors.email && props.touched.email}
                    helperText={<ErrorMessage email='email' />} required 
                    variant="outlined" />
                    <p className={classes.error}>{alert.email}</p>
                <TextField
                    className={clsx(classes.input, classes.password)}
                    label="Mật khẩu" type="password"
                    // value={userData.password}
                    name='password'
                    error={props.errors.password && props.touched.password}
                    helperText={<ErrorMessage password='password' />} required 
                    variant="outlined" />
                    <p className={classes.error}>{alert.password}</p>
                <TextField
                    className={clsx(classes.input, classes.cfpassword)}
                    label="Nhập lại mật khẩu" type="password"
                    // value={userData.cfpassword}
                    name='cfpassword'
                    error={props.errors.cfpassword && props.touched.cfpassword}
                    helperText={<ErrorMessage cfpassword='cfpassword' />} required 
                    variant="outlined" />
                    <p className={classes.error}>{alert.cfpassword}</p>
                <FormControl component="fieldset">
                    <RadioGroup
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        // value={userData.gender}
                        // onChange={handleChangeInput}
                        >
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
                )}
                </Formik>
        </div>
    )
}

export default Register