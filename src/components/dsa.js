import {useState} from 'react';

const DSA = () => {

  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async (event) => {
    setIsLoading(true);

    try {
        const response = await fetch('https://datastructuresjava.herokuapp.com/'+event.target.value, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        if (response.ok) {
          const result = await response.json();
          // console.log('result is: ', JSON.stringify(result, null, 4));
          setData(result);
          setErr("");
        }
        else {
          throw new Error(`Error! status: ${response.status}`);
        }
      } catch (err) {
        setErr(err.message);
      } finally {
        setIsLoading(false);
      }
  };

  console.log(data);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '90vh'}}    >
      <div>
        {err && <h2>{err}</h2>}
        <select id="lang" onChange={handleClick}>
            <option value="arrayrotation">Array Rotation</option>
            <option value="arrayprefixsum">arrayprefixsum</option>
            <option value="arraycarryforward">arraycarryforward</option>
          </select>
        {isLoading && <h2>Loading...</h2>}

      <div key={data.Title} class = 'col-sm-12'>
        <h2>{data.Title}</h2>
        <h2>{data.problem}</h2>
        <h2>{data.solution}</h2>
        <h2>{data.input}</h2>
        <h2>{data.output}</h2>
        <br />
    </div>
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