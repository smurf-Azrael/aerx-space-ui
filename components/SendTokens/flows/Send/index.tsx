import React, { useState } from 'react'
import SuccessPayment from '../../../Alerts/SuccessPayment';
import ErrorPayment from '../../../Alerts/ErrorPayment';
import InitializeSend from './InitializeSend';
import SendCoins from './SendCoins';

interface IProps {
    onClose: () => void;
}
const SendFlow: React.FC<IProps> = ({onClose}) => {
    const [flow, setFlow] = useState<number>(0);
    const [transactionStatus, setTransactionStatus] = useState<'pending' | 'success' | 'failed'>('pending');
    return (
        <div>
           {flow === 0 && transactionStatus === 'pending' && <InitializeSend setFlow={setFlow} />}
           {flow === 1 && transactionStatus === 'pending' && <SendCoins  setTransactionStatus={(status) => setTransactionStatus(status)}/>}
           {transactionStatus === 'success' && <SuccessPayment onClose={onClose} />}
           {transactionStatus === 'failed' && <ErrorPayment onClose={onClose} />}
        </div>
    )
}
export default SendFlow;