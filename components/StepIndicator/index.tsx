import React from 'react'

const  StepIndicator: React.FC<{bg?: string}> = ({bg}) => {
    return (
        <div className={`rounded-full p-[5px] bg-${bg ? bg : 'white'}`} 
        style={{
            opacity : !bg ? '15%' : '100%%',
            }}>

        </div>
    )
}
export default StepIndicator;
