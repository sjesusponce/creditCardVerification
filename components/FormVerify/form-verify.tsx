import { Dispatch, SetStateAction, useState } from "react"

interface FormVerifyProps {
    cardNumber: string
    cardName: string
    expireDate: {month: string, year: string}
    cvc: string
    onCardNumber:(e:any)=>void
    onCardName:(e:any)=>void
    onExpDateMonth:(e:any)=>void
    onExpDateYear:(e:any)=>void
    onCvc:(e:any)=>void
    isCardNumberValid:boolean
    isMonthValid:boolean
    isYearValid:boolean
    isCvcValid:boolean
}

const FormVerify = (props: Partial<FormVerifyProps>)=>{

    const [validation, setValidation] = useState(false)

    const confirmHandler = (e:any)=>{
        e.preventDefault()
        if(props.isCardNumberValid &&
            props.isMonthValid &&
            props.isYearValid &&
            props.isCvcValid)
            setValidation(true)
    }

    const formVerify = (
        <form className='w-[30rem] desktop:pl-6'>
            <div className='flex flex-col pb-2'>
                <label className='pb-2 text-tiny text-[#21092F] uppercase' htmlFor='cardName'>Cardholder Name</label>
                <input className='field-primary peer' name='cardName' placeholder='e.g Jane Appleseed' type='text' value={props.cardName} onChange={props.onCardName} required/>
                <p className="hidden peer-invalid:block text-red-600 text-sm pl-2">Please enter a name</p>
            </div>
            <div className='flex flex-col pb-2'>
                <label className='py-2 text-tiny text-[#21092F] uppercase' htmlFor='cardNumber'>Card Number</label>
                <input className='field-primary peer' name='cardNumber' placeholder='e.g 1234 5678 9123 0000' type='text' value={props.cardNumber} onChange={props.onCardNumber} maxLength={19} required />
                <p className="hidden peer-invalid:block text-red-600 text-sm pl-2">Please enter a Card Number</p>
                {!props.isCardNumberValid ? (<p className="text-red-600 text-sm pl-2 block peer-invalid:hidden">Invalid Format</p>): (<></>)}
            </div>
            <div className='flex flex-row justify-between items-end pb-2'>
                <div className=''>
                    <label className='text-tiny text-[#21092F] uppercase' htmlFor='expireDate'>Exp. Date (MM/DD)</label>
                    <div className='inline-block'>
                        <input className='field-primary inline peer w-20 mr-2' placeholder='MM' type='text' value={props.expireDate?.month} onChange={props.onExpDateMonth} maxLength={2} required/>
                        <input className='field-primary inline peer w-20 ml-2' placeholder='YY' type='text' value={props.expireDate?.year} onChange={props.onExpDateYear} maxLength={2} required/>
                        <p className="hidden peer-invalid:block text-red-600 text-sm pl-2">Can&apos;t be blank</p>
                        {!props.isYearValid && !props.isMonthValid ? (<p className="text-red-600 text-sm pl-2 block peer-invalid:hidden">Invalid Format</p>): (<></>)}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-tiny text-[#21092F] uppercase' htmlFor='cardNumber'>Cvc</label>
                    <input className='field-primary peer' name='cardNumber' placeholder='e.g 123' type='text' value={props.cvc} onChange={props.onCvc} maxLength={3} required/>
                    <p className="hidden peer-invalid:block text-red-600 text-sm pl-2">Can&apos;t be blank</p>
                    {!props.isCvcValid ? (<p className="text-red-600 text-sm pl-2 block peer-invalid:hidden ">Invalid Format</p>): (<></>)}
                </div>
            </div>
            <button className='btn-primary' type='submit' onClick={confirmHandler} >Confirm</button>
        </form> 
    )

    const verifySuccess = (
        <section className='flex flex-col items-center justify-between h-fit'>
            <picture className='pb-6'>
                <img src='icon-complete.svg' alt='icon-complete' />
            </picture>
            <h2 className='text-[#21092F] text-4xl uppercase'>Thank You!</h2>
            <p className='text-[#D1D1D1]' >We&apos;ve added your card details</p>
            <button className='btn-primary w-full'>Continue</button>
        </section>
    )

    return validation ? verifySuccess : formVerify
}

export default FormVerify