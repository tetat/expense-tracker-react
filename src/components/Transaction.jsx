const Transaction = ({ transaction }) => {
  const symbolClass = (amount) => {
    if (amount < 0) return ["-৳", "minus"];
    if (amount > 0) return ["+৳", "plus"];
    return ["৳", "plus"];
  };

  const [symbol, styleClass] = symbolClass(transaction.amount);

  return (
    <li className={styleClass}>
      {transaction.text + " "}
      <span>{symbol + Math.abs(transaction.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
