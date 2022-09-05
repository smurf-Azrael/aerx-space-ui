import React, { useState } from 'react'
import InitializeDeal from './InitializeDeal';
import InitializeDealNFT from './Nft';

interface IProps {
    onClose: () => void
}
const DealFlow: React.FC<IProps> = ({onClose}) => {
    const [flow, setFlow] = useState<number>(0);
    return (
        <div>
            {flow === 0 && <InitializeDeal setFlow={setFlow} />}
            {flow === 1 && <InitializeDealNFT />}
        </div>
    )
}

export default DealFlow;