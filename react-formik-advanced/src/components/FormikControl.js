import React from 'react'
import CheckBox from './CheckBox'
import Date from './Date'
import Input from './Input'
import RadioButtons from './RadioButtons'
import Select from './Select'
import Textarea from './Textarea'

const FormikControl = (props) => {
    const {control , ...rest} = props
    switch(control) {
        case "input": return <Input {...rest} />
        case "textarea": return <Textarea {...rest} />
        case "select": return <Select  {...rest} />
        case "radio": return <RadioButtons {...rest} />
        case "checkbox": return <CheckBox {...rest}/>
        case "date": return <Date {...rest} />
        default: return null
        
    }

}

export default FormikControl
