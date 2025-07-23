exports.getTransactions = (req, res, nxt) => {
    res.send('GET Transactions');
}

exports.addTransaction = (req, res, nxt) => {
    res.send('POST Transaction');
}

exports.deleteTransaction = (req, res, nxt) => {
    // const id = useParams('id');
    res.send(`DELETE Transaction`);
}