function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [add, setAdd] = React.useState(0);
  const ctx = React.useContext(UserContext);  
  const {balance, updateBalance} = React.useContext(UserContext); 

  // EVENTS 

  function onChange(e){
    if (e.currentTarget.value.length===0){
      setReady(false)
    } else {
      setAdd(e.currentTarget.value);
      setReady(true)}
    }

  function validate(deposit, balance){
    if (isNaN(deposit)) {
      setStatus('Error: Must be a number');
      setTimeout(() => setStatus(''),4000);
      return false;
    } else {
      if (deposit < 1) {
        setStatus("Error: Must be at least $1");
        setTimeout(() => setStatus(""), 4000);
        return false;
    } else{
      if (deposit) {
        setStatus("Success: Funds deposited");
        setTimeout(() => setStatus(""), 4000);
    return true;
      }
  }
}}
    
  function handleCreate(){
    if (!validate(add, 'Deposit Amount')) {
    return;
    }
   updateBalance(parseFloat(balance) + parseFloat(add));
    setShow(false);
  }   

  function depositImpl() {
    if (!validate(Number(deposit), balance)) return;

    setBalance(balance + Number(deposit));
    ctx.users[0].balance = balance + Number(deposit);
    ctx.users[0].movements.push({
      date: getDate(),
      type: "deposit",
      amount: deposit,
    });
    setDeposit("");
    setShow(false);
  }

  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Deposit"
      status={status}
      title="Balance: $"
      body={show ? (  
              <> 
              Deposit<br/>
                 <input type="text" className="form-control" id="add" placeholder="Enter Amount"  onChange={onChange} /><br/>
                 <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit Funds</button>
                 </>
            ):(
              <>
              <h5>Success</h5>
              </>
               )}
    />
  )}
