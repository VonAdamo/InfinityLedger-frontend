import { useState } from 'react';
import TransactionData from './TransactionData';

function BlockData({ block }) {
    const [displayData, setDisplayData] = useState(false);
    const shortHash = `${block.hash.substring(0, 20)}...`;
    const shortLastHash = `${block.lastHash.substring(0, 20)}...`;

    const shortData = JSON.stringify(block.data).length > 40
        ? `${JSON.stringify(block.data).substring(0, 40)}...`
        : JSON.stringify(block.data);

    const toggleDisplay = () => {
        if (displayData) {
            return (
                <section>
                    <div className='btn-container'>
                        <button className='btn' onClick={() => setDisplayData(!displayData)}>Show less</button>
                    </div>
                    <div>
                        {block.data.map((transaction) => (
                            <div key={transaction.id}>
                                <TransactionData transaction={transaction} />
                            </div>
                        ))}
                    </div>
                </section>
            );
        } else {
            return (
                <section>
                    <div className="btn-container">
                        <button className="btn" onClick={() => setDisplayData(!displayData)}>Show details</button>
                    </div>
                    <div>{shortData}</div>
                </section>
            );
        }
    };

    return (
        <div className='block'>
            <div>Previous Hash: {shortLastHash}</div>
            <div>Timestamp: {new Date(block.timestamp).toLocaleDateString("sv-SE")}</div>
            <div>Block Number: {block.blockIndex}</div>
            <div>Hash: {shortHash}</div>
            {toggleDisplay()}
        </div>
    );
}

export default BlockData;