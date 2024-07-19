import BlockData from "../components/BlockData";
import { getBlockchain } from "../services/BlockchainClient"
import { useEffect, useState } from "react"

export const InfinityLedger = () => {
    const [blockchain, setBlockchain] = useState([]);

    useEffect(() => {
        fetchBlockchain();
    }, []);

    const fetchBlockchain = async () => {
        const response = await getBlockchain();
        setBlockchain(response.data);
    }

    return (
        <div className='infinity-wrapper'>
            <h1>Infinity Ledger</h1>
            <div className='blockchain-wrapper'>
                {blockchain.map((block) => (
                    <BlockData className="block" key={block.hash} block={block} />
                ))}
            </div>
        </div>
    )
}