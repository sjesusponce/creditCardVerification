import { Dispatch, SetStateAction, useState } from "react"
import { DeepRequired, FieldErrorsImpl, FieldValues, useFormContext, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

interface FormVerifyProps {
    onRegister:UseFormRegister<FieldValues>
    onError:FieldErrorsImpl<DeepRequired<FieldValues>>
    onSubmit:any
    onCvcRegister: any
}

const FormVerify = (props: Partial<FormVerifyProps>)=>{

    const [validation, setValidation] = useState(false)

    const { register, formState:{ errors } } = useFormContext<any>();

    const formVerify = (
        <form className='w-[30rem] desktop:pl-6' onSubmit={props.onSubmit?.((data:any)=>{
            setValidation(true)
        })}>
            <div className='flex flex-col pb-2'>
                <label className='pb-2 text-tiny text-text-gray-violet uppercase' htmlFor='cardName'>Cardholder Name</label>
                <input className={`field-primary ${errors.cardName ? 'border-red-500': 'border-light-gray-violet'}`}
                    {...register('cardName', {
                        required:{value:true, message:"Please enter a name"}, 
                        pattern:{ value:/[A-Za-z]+$/, message:'Not numbers allowed in name'}})}
                    placeholder='e.g Jane Appleseed' />
                {errors.cardName && (<p className="text-red-600 text-sm pl-2">{errors.cardName.message as unknown as string}</p>)}
            </div>
            <div className='flex flex-col pb-2'>
                <label className='py-2 text-tiny text-text-gray-violet uppercase' htmlFor='cardNumber'>Card Number</label>
                <input className={`field-primary ${errors.cardNumber ? 'border-red-500': 'border-light-gray-violet'}`}
                    {...register('cardNumber', {
                        required:{value:true, message:"Please enter a Card Number"}, 
                        pattern:{ value:/[0-9]+$/, message:'Invalid format'}, 
                        minLength:{value:16, message:'16 digits is required'}})}
                    placeholder='e.g 1234 5678 9123 0000' maxLength={16}/>
                {errors.cardNumber && (<p className="text-red-600 text-sm pl-2">{errors.cardNumber.message as unknown as string}</p>)}
            </div>
            <div className='flex flex-row justify-between items-end pb-2'>
                <div className=''>
                    <label className='text-tiny text-text-gray-violet uppercase' htmlFor='expireDate'>Exp. Date (MM/DD)</label>
                    <div className='inline-block'>
                        <input className={`field-primary inline w-20 mr-2 ${errors.expireDateMonth ? 'border-red-500': 'border-light-gray-violet'}`} 
                            {...register('expireDateMonth', {
                                required:{value:true, message:"Can't be blank"}, 
                                pattern:{ value:/[0-9]+$/, message:'Invalid format'}, 
                                maxLength:{value:2, message:'Two digits is required'}, 
                                minLength:{value:2, message:'Two digits is required'}})}
                            placeholder='MM' maxLength={2} />
                        <input className={`field-primary inline w-20 ml-2 ${errors.expireDateYear ? 'border-red-500': 'border-light-gray-violet'}`}
                            {...register('expireDateYear', {
                                required:{value:true, message:"Can't be blank"}, 
                                pattern:{ value:/[0-9]+$/, message:'Invalid format'}, 
                                maxLength:{value:2, message:'Two digits is required'}, 
                                minLength:{value:2, message:'Two digits is required'}})}
                            placeholder='YY' maxLength={2} name='expireDateYear'/>
                        {errors.expireDateYear || errors.expireDateMonth ? (<p className="text-red-600 text-sm pl-2">{errors.expireDateYear?.message as unknown as string || errors.expireDateMonth?.message as unknown as string}</p>):<></>}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-tiny text-text-gray-violet uppercase' htmlFor='cvc'>Cvc</label>
                    <input className={`field-primary ${errors.cvc ? 'border-red-500': 'border-light-gray-violet'}`} 
                        {...register('cvc', {required:{value:true, message:"Can't be blank"}, pattern:{ value:/[0-9]+$/, message:'Invalid format'}, minLength:{value:3, message:'Three digits is required'}})}
                        placeholder='eg. 123' maxLength={3}/>
                    {errors.cvc && (<p className="text-red-600 text-sm pl-2">{errors.cvc.message as unknown as string}</p>)}
                </div>
            </div>
            <button className='btn-primary' type='submit'>Confirm</button>
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