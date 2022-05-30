function AllData(){
  const ctx = React.useContext(UserContext);

  return ctx.users.map((user, index) => {
    return (
      <Card
        name="a"
        txtcolor="black"
        bgcolor="info"
        header="Account Information"
        title={`User: ${user.name}`}
        key={user.name}
        body={
          <>
            <ul className="list-group list-group-flush">
              <li className="list-group-item email">Email: {user.email}</li>
              <li className="list-group-item password">
                Password: {user.password}
              </li>
              <li className="list-group-item">
                Account balance: ${user.balance}
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Number of transactions:
                <span className="badge bg-dark rounded-pill">
                  {!user.movements ? 0 : user.movements.length}
                </span>
              </li>
            </ul>
            {!user.movements ? (
              <br />
            ) : (
              user.movements.map(function (movement, i) {
                return (
                  <ul className="movements-list" key={`${movement.type}-${i}`}>
                    <li
                      className={`list-group-item movement ${
                        movement.type === "deposit" ? "deposit" : "withdraw"
                      }`}
                    >
                      <span>{movement.date}</span>{" "}
                      <span>{movement.type.toUpperCase()}</span>{" "}
                      <span>${movement.amount}</span>
                    </li>
                  </ul>
                );
              })
            )}
          </>
        }
      />
    );
  });
}
