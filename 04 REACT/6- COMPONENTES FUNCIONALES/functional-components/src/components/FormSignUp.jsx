
import {setState} from "react";
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

function FormSignUp({handleSubmit}){

    const [name, setName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const [add, setAdd] = useState(true)
    const [news, setNews] = useState(false)

    const [errors, setErrors] = useState({
		name: {
			error: false,
			message:
				"Deben ser al menos 3 caracteres",
		},
	})

    function validarNombre(nombre) {
		if (nombre.length >= 3) {
			return {
				name: {
					error: false,
					message: "",
				},
			}
		} else {
			return {
				name: {
					error: true,
					message:
						"Deben ser al menos 3 caracteres",
				},
			}
		}
	}


    return(
         <form
          onSubmit={ (e) => {
        e.preventDefault()
        handleSubmit({
            name,
            lastName,
            email,
            add,
            news,
        })
    }}>
        <TextField id="firstName" 
        label="First Name" 
        variant="outlined" 
        fullWidth margin='normal'
        onChange={ (e) => 
            setName(e.target.value)}
        value={name}
        error={errors.name.error}
				helperText={
					errors.name.error
						? errors.name.message
						: ""
				}
				onBlur={(e) => {
					setErrors(
						validarNombre(
							e.target.value
						)
					)
				}}
			/>

        <TextField id="lastName" 
        label="Last Name" 
        variant="outlined" 
        fullWidth margin='normal' 
        onChange={ (e) => 
            setLastName(e.target.value)}
        value={lastName}/>
        
        <TextField id="email" 
        label="Email" 
        variant="outlined" 
        fullWidth margin='normal'
        onChange={ (e) => 
            setEmail(e.target.value)}
        value={email} />
      
        <FormGroup>
            <FormControlLabel control={
                <Switch
                checked={add}
                onChange={(e) =>
                    setAdd(
                        e.target.checked
                    )
                }
            />
            
        }
            
            label= "Adds"/>
            

            <FormControlLabel control={
                <Switch
                checked={news}
                onChange={(e) =>
                    setNews(
                        e.target.checked
                    )
                }
            />
        }
            
            label= "News"/>
        </FormGroup>
       
        
        <Button variant="contained"
        type="submit">Register</Button>
    </form>
)
}

export default FormSignUp