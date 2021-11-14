// import { TextField } from '@material-ui/icons';
import {ErrorMessage, useField} from 'formik';

function TextField({label, ...props}) {
  const [field, meta] = useField(props);
  return (
          <>
            <label htmlFor={field.name}>{label}</label>
            <TextField
                    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
          </>
  );
}

export default TextField;