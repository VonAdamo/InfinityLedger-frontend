function TransactionData({ transaction }) {
    const { inputMap, outputMap } = transaction;
    const recipients = Object.keys(outputMap);

    const sender = typeof inputMap.address === 'string'
        ? inputMap.address.length > 20
            ? `${inputMap.address.substring(0, 20)}...`
            : inputMap.address
        : JSON.stringify(inputMap.address);

    return (
        <section>
            <div className="transaction-info">
                <span>From: {sender}</span>
                <span>Balance: {inputMap.amount}</span>
            </div>

            {recipients.map((recipient) => {
                const recipientStr = typeof recipient === 'string'
                    ? recipient.length > 20
                        ? `${recipient.substring(0, 20)}...`
                        : recipient
                    : JSON.stringify(recipient);

                return (
                    <div key={recipient} className="transaction-info">
                        <span>
                            To: {" "}
                            {recipientStr}
                        </span>
                        <span>Sent: {outputMap[recipient]}</span>
                    </div>
                );
            })}
        </section>
    );
}

export default TransactionData;