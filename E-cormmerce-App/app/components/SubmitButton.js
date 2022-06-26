import React from 'react';
import { moduleName } from 'react-native';
import AppButton from './AppButton';
import { useFormikContext, Formik } from 'formik';
const {handleChange,handleSubmit,errors, setFieldTouched, touched} = useFormikContext()
const SubmitButton = ({title}) => {
    return (
        <AppButton title={title} 
                  myPress={handleSubmit}
               // onPress={()=>console.log(email,password)} 
                 />
    );
}

export default SubmitButton;