import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MouseEventHandler, useState } from 'react'
import { FieldValues, FormProvider, useForm, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'
import CreditCardFrontPreview from '../components/CreditCardPreview/CreditCardFrontPreview/credit-card-front-preview'
import CreditCardRearPreview from '../components/CreditCardPreview/CreditCardRearPreview/credit-card-rear-preview'
import FormVerify from '../components/FormVerify/form-verify'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const methods = useForm(
		{defaultValues:{
			cardName: '',
			cardNumber: '',
			expireDateMonth: '',
			expireDateYear: '',
			cvc: '',
		}}
	);

	const isDigit = (char: string): boolean => char.length === 1 && char >= '0' && char <= '9';

	const formatCardNumber = (cardNumber:string)=>{
		const splittedNumbers = cardNumber.split('')
		let formattedNumber = splittedNumbers.map((el,idx)=>{
			if(idx == 3 || idx == 7 || idx == 11){
				return el+ ' '
			}else{
				return el
			}
		})

		return formattedNumber.join('')
	}
		
	return (
		<div className='h-screen'>
			<Head>
				<title>Card NextJs</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className='desktop:flex desktop:flex-row desktop:justify-between h-full'>
				<section className='desktop:h-screen mobile:h-[375px] desktop:mb-12 bg-fixed bg-center bg-cover bg-[url("/bg-main-desktop.png")] basis-1/3'> 
					<div className='desktop:fixed mobile:flex desktop:left-[calc(33%-320px)] desktop:top-[calc(50%-330px)] mobile:justify-center desktop:h-[30.556rem]'>
						<div className='flex flex-col justify-between h-full mobile:mt-12'>
							<CreditCardFrontPreview 
								cardName={methods.watch('cardName')} 
								cardNumber={formatCardNumber(methods.watch('cardNumber'))}
								expireDate={{month: methods.watch('expireDateMonth'), year: methods.watch('expireDateYear')}}
							/>
							<CreditCardRearPreview className='mobile:ml-24'
							 	cvc={methods.watch('cvc')}
							/>
						</div>
					</div>
				</section>
				<section className='bg-white basis-2/3 desktop:h-full mobile:h-[calc(100%-375px)] flex justify-center items-center'>
					<FormProvider {...methods}>
						<FormVerify onSubmit={methods.handleSubmit}/>
					</FormProvider>
				</section>
			</main>
		</div>
	)
}

export default Home
