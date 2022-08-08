interface CreditCardRearProps{
    cvc: string,
    className: string
}

const CreditCardRearPreview = (props: Partial<CreditCardRearProps>)=>{

    const applyCss='bg-[url("/bg-card-back.png")] w-[24.833rem] h-[13.611rem] relative'

    const css = applyCss.split(' ')

    if(props.className != undefined){
        css.push(props.className)
    }
    
    return(
        <div className={css.join(' ')}>
            <div className='absolute top-[5.856rem] right-12'>
                <div className='font-thin'>
                    {props.cvc == undefined || props.cvc.length == 0 ? '000' : props.cvc}
                </div>
            </div>
        </div>
    )
}

export default CreditCardRearPreview