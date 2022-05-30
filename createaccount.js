function CreateAccount(){
  /// STATES
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);    

  /// EVENTS - validate, handleCreate, clearform
  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow('true');  
  }

  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Create Account"
      status={status}
      body={show ? (
          <>
          Name<br/>
          <input type="input" className="form-control" id="name" 
          placeholder="Enter Name" value={name} onChange={e => setName(e.
            currentTarget.value)} /><br/>
          Email<br/>
          <input type="input" className="form-control" id="email" 
          placeholder="Enter Email" value={email} onChange={e => setEmail(e.
            currentTarget.value)} /><br/>
          Password<br/>
          <input type="input" className="form-control" id="password" 
          placeholder="Enter Password" value={password} onChange={e => setPassword(e.
            currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
          </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
        </>
      )}

    />
  );
}