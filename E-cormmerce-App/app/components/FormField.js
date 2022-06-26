import React from 'react';
import { } from 'react-native';
import AppError from '../screens/AppError';
import { useFormikContext, Formik } from 'formik';
import AppTextInput from './AppTextInput';

const {handleChange,handleSubmit,errors, setFieldTouched, touched} = useFormikContext()
const FormField = ({name, ...otherProps}) => {
    return (
        <>
        <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={()=>setFieldTouched(name)}
        {...otherProps}
     // onChangeText={(text)=>setemail(text)}
   />
       <AppError errors={errors[name]} visible={touched[name]}></AppError>
        
         </>
    );
}

export default FormField;

// {touched.email && <AppError errors={errors.email} />}


// <AppTextInput

// onChangeText={handleChange('password')}
// onBlur={()=>setFieldTouched('password')}
// // onChangeText={(text)=>setpassword(text)}
// />
   
//    {touched.password && <AppError errors={errors.password} />}
