import React, { Fragment, useState } from 'react'
import Inputs from './Inputs'
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";

const EditForm = ({user}) => {
    const [open, setOpen] = useState(1);
    console.log(user)
    const [Values, setValues] = useState({
        username: '',
        email: user.value && user.value.Email,
        phone: '',
        pin: '',
        city: '',
        state: '',
        address: '',
        password: '',
        cpassword: ''
    })

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'UserName',
            errorMessage: 'User Name sholud be 3-16 characters and shoud`t include any special character!',
            label: 'UserName',
            pattern: '^[A-Za-z0-9 ]{3,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email (Cannnot be updated)',
            errorMessage: 'It should be a valid email address!',
            label: 'Email (Cannnot be updated)',
            disabled:true,
            required: true,
        },
        {
            id: 3,
            name: 'phone',
            type: 'tel',
            placeholder: 'Phone',
            errorMessage: 'It should be a valid phone number!',
            label: 'Phone',
            pattern: '^[0-9*]{11,12}$',
            required: true,
        },
        {
            id: 4,
            name: 'pin',
            type: 'tel',
            placeholder: 'Area Pin Code',
            errorMessage: 'Please, Enter a valid area pin code.',
            label: 'Area Pin Code',
            pattern: '^[0-9*]{3,6}$',
            required: true,
        },
        {
            id: 5,
            name: 'city',
            type: 'text',
            placeholder: 'City',
            errorMessage: 'Please, Enter valid city name.',
            label: 'City',
            pattern: '^[A-Za-z]{3,16}$',
            required: true,
        },
        {
            id: 6,
            name: 'state',
            type: 'text',
            placeholder: 'State',
            errorMessage: 'Please, Enter valid state name.',
            label: 'State',
            pattern: '^[A-Za-z]{3,16}$',
            required: true,
        },
        {
            id: 7,
            name: 'address',
            type: 'text',
            placeholder: 'Address',
            errorMessage: 'Please, Enter valid address { city, state, country }.',
            label: 'Address',
            pattern: "^[a-zA-Z0-9, ]{3,}$",
            required: true,
        },
    ]
    const handelPinCode = async (event) => {
        /^[0-9]*$/.test(event.target.value) ? setPin(event.target.value) : ''
        if (event.target.value.length == 5) {
            let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincodes`)
            let pinsJson = await pins.json()
            if (Object.keys(pinsJson).includes(event.target.value)) {
                setCity(pinsJson[event.target.value][0])
                useState(pinsJson[event.target.value][1])
            } else {
                setCity('')
                useState('')
            }
        } else {
            setCity('')
            useState('')
        }
    }

    const updateUser = async (event) => {
        event.preventDefault()
        console.log(Values)
        if (Values.email.length < 10 && Values.username.length < 3 && Values.phone && Values.district.length < 3 &&
            Values.state.length < 4 && Values.pin.length < 4 && Values.address.length < 10) {
            if (phone.length < 11) {
            }

        }
    }
    const handelSubmit = () => {

    }

    const onChange = (event) => {
        setValues({ ...Values, [event.target.name]: event.target.value })
    }
    return (

        <div>
            <Fragment>
                <Accordion open={open === 1}>
                    <AccordionHeader className='dark:text-white text-gray-600' onClick={() => handleOpen(1)}>
                        <li
                            className='text-left dark:text-green-500 font-bold text-2xl text-gray-600'>
                            Edit your profile info
                        </li>
                    </AccordionHeader>
                    <AccordionBody>
                        <form className='grid grid-cols-2 mt-4' onSubmit={handelSubmit}>
                            {inputs.map(input => (
                                <Inputs
                                    key={input.id}
                                    {...input}
                                    value={Values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                        </form>
                        <button
                            onClick={updateUser}
                            className='bg-green-600 mt-1 p-3 rounded-md px-32 font-bold dark:text-white text-gray-600'>
                            Submit
                        </button>
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 2}>
                    <AccordionHeader className="dark:text-white text-gray-600" onClick={() => handleOpen(2)}>
                        <li
                            className='text-left dark:text-green-500 font-bold text-2xl text-gray-600'>
                            Edit your credentials
                        </li>
                    </AccordionHeader>
                    <AccordionBody className="grid grid-cols-1">
                        <form className='grid grid-cols-2 ' onSubmit={handelSubmit}>
                            <Inputs
                                key={8}
                                name='password'
                                type='password'
                                placeholder='Password'
                                errorMessage='Password sholud be 3-16 characters and shoud include any 2 special character!'
                                label='Password'
                                pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'
                                required={true}
                                value={Values['password']}
                                onChange={onChange}
                            />

                            <Inputs
                                key={9}
                                name='cpassword'
                                type='password'
                                placeholder='Conform Password'
                                errorMessage='Password dose`t matched!'
                                label='Conform Password'
                                pattern={Values['password']}
                                required={true}
                                value={Values['cpassword']}
                                onChange={onChange}
                            />
                        <button
                            className='bg-green-600 mt-5 mr-40 mx-5 p-3 rounded-md px-32 font-bold dark:text-white text-gray-600'>
                            Submit
                        </button>
                        </form>
                    </AccordionBody>

                </Accordion>
            </Fragment>
        </div>
    )
}


export default EditForm