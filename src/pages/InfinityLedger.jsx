import { getBlockchain } from "../services/HttpClient"
import { useEffect, useState } from "react"

export const InfinityLedger = () => {
    const [blockchain, setBlockchain] = useState([]);

    useEffect(() => {
        fetchBlockchain();
    }, []);

    const fetchBlockchain = async () => {
        const blocks = await getBlockchain();
        setBlockchain(blocks.data);
    }

    return (
        <>
            <div className='infinity-wrapper'>
                <h1>Infinity Ledger</h1>
                <div className='blockchain-wrapper'>
                    <ul>
                        {blockchain.map((block, index) => (
                            <li key={index} className='block-container'>
                            Timestamp: {block.timestamp}
                            <br />
                            Block Index: {block.blockIndex}
                            <br />
                            Hash: {block.hash}
                            <br />
                            Last Hash: {block.lastHash}
                            <br />
                            Nonce: {block.nonce}
                            <br />
                            Difficulty: {block.difficulty}
                            <br />
                            Data: {JSON.stringify(block.data)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}