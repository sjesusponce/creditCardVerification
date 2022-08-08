import { Dispatch, SetStateAction } from "react";

interface CreditCardFrontProps{
    cardNumber: string;
    cardName: string;
    expireDate: {month: string, year: string};
}

const CreditCardFrontPreview = (props:Partial<CreditCardFrontProps>)=>{

    return(
        <div className='mobile:absolute mobile:top-40 mobile:z-10 desktop:static'>
            <div className='bg-[url("/bg-card-front.png")] w-[24.833rem] h-[13.611rem] flex flex-col justify-between py-4 px-7'>
                <div className='flex items-center mt-2'>
                    <span className='bg-white inline-block rounded-full h-10 w-10 mr-2'></span>
                    <span className=' inline-block border-2 border-white rounded-full h-5 w-5'>
                    </span>
                </div>
                <div className='flex flex-col'>
                    <div className='pb-5 text-center text-2xl font-bold justify-self-end'>
                        {props.cardNumber == undefined || props.cardNumber.length == 0 ? '0000 0000 0000 0000' : props.cardNumber}
                    </div>
                    <div className='flex justify-between text-sm font-normal'>
                        {props.cardName == undefined || props.cardName.length == 0 ? (<p>Jane Appleseed</p>) : (<p>{props.cardName}</p>)}
                        {props.expireDate == undefined || props.expireDate.month.length == 0 && props.expireDate.year.length == 0 ? (<p>00/00</p>) : (<p>{props.expireDate.month}/{props.expireDate.year}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCardFrontPreview