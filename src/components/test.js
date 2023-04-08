import React from 'react';

export const Test = () => {

  const [fetchedData, setFetchedData] = React.useState();
  const [serverTest, setServerTest] = React.useState();

  const fetchTestData = async () => {
    const response = await fetch(`${process.env.REACT_APP_ORIGIN}/api/testRoute/dbtest`, {
      method: 'GET',
      mode: "cors",
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json()
    console.log(data);
    setFetchedData(data);
  }

  const fetchTestServerData = async () => {
    const response = await fetch(`${process.env.REACT_APP_ORIGIN}/api/testRoute`, {
      method: 'GET',
      mode: "cors",
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json()
    console.log(data);
    setServerTest(data);
  }


  let testDisplay;
  if (fetchedData) {
    testDisplay = fetchedData.map((person) => {
      return <p key={person.id}>{person.email}</p>
    });
  }

  let serverTestDisplay;
  if (serverTest) {
    serverTestDisplay = serverTest
  }

  React.useEffect(() => {
    fetchTestData();
    fetchTestServerData();
  }, []);

  return (
    <div>
      <h1 align="center">Test data should render below</h1>
      {serverTestDisplay}
      {testDisplay}
    </div>
  );
}