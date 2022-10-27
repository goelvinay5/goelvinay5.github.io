import {useState} from 'react';

const DSA = () => {

  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://datastructuresjava.herokuapp.com/arrayrotation', {
        mode: 'no-cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      }).then(res => console.log(res));

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '90vh'
      }}
    >
      <div style={{
        height: '90%'
      }}>

        DSA
        {err && <h2>{err}</h2>}

<button onClick={handleClick}>Fetch data</button>
{isLoading && <h2>Loading...</h2>}

{data => {
  return (
    <div key={data.Title}>
      <h2>{data.input}</h2>
      <h2>{data.output}</h2>
      <br />
    </div>
  );
}}
      </div>

      <div>
        <p>
          A project by{" "}
          <a
            href="https://github.com/goelvinay5"
            rel="noopener"
            className="small-link"
          >
            Vinay Goel
          </a>
          <a
            href="https://github.com/goelvinay5"
            rel="noopener"
            target="_blank"
            className="no-link icon-github"
            aria-label="Follow me on Github"
          ></a>
        </p>
      </div>
    </div>
  );
}

export default DSA;