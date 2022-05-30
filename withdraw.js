function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [add, setAdd] = React.useState(0);
  const ctx = React.useContext(UserContext);  
  const {balance, updateBalance} = React.useContext(UserContext); 

  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Withdraw"
      title="Balance: $"
      status={status}
      body={
        show ? (
          <WithdrawForm setShow={setShow} />
        ) : (
          <WithdrawMessage setShow={setShow} />
        )
      }
    />
  );

  function WithdrawForm(props) {
    const [withdraw, setWithdraw] = React.useState("");
    const [disabled, setDisabled] = React.useState(true);

    function handleWithdraw() {
      if (!validate(Number(withdraw), balance)) return;

      setBalance(balance - withdraw);
      ctx.users[0].balance = balance - Number(withdraw);
      ctx.users[0].movements.push({
        type: "withdraw",
        amount: withdraw,
      });
      setWithdraw("");
      setShow(false);
    }

    return (
      <>
        Withdraw Amount
        <input
          type="input"
          className="form-control"
          id="withdraw"
          placeholder="Enter Amount"
          value={withdraw}
          onChange={(e) => {
            setWithdraw(e.currentTarget.value);
            setDisabled(false);
          }}
        />
        <br />
        <button
          type="submit"
          className="btn btn-light"
          onClick={handleWithdraw}
          disabled={disabled}
        >
          Withdraw Funds
        </button>
      </>
    );
  }

  function WithdrawMessage(props) {
    return (
      <>
        <span className="balance-info">Balance ${balance}</span>
        <br />
        <br />
        <h5>Successful Withdrawl</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={() => props.setShow(true)}
        >
          Withdraw Again
        </button>
      </>
    );
  }

  function validate(withdraw, balance) {
    if (isNaN(withdraw)) {
      setStatus("Error: did not enter a valid number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (withdraw > balance) {
      setStatus("Error: Insuffienct funds");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (withdraw < 1) {
      setStatus("Error: Lowest withdrawl amount is $1");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
}