import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
        setData("");
      } finally {
        setIsLoading(false);
      }
  };

  return (
    <div>
      <div class = 'row'>
        <div class = 'col-sm-12'><br/>
          <select id="lang" onChange={handleClick}>
              <option value="select">Select</option>
              <option value="arrayrotation">Array Rotation</option>
              <option value="arrayprefixsum">arrayprefixsum</option>
              <option value="arraycarryforward">arraycarryforward</option>
          </select><br/>
        </div>
        <div>
          {isLoading && <h2>Loading...</h2>}
        </div>
        <div>
          {err && <h2>{err}</h2>}
        </div>
      </div><br/>

      <div key={data.Title} class = 'row'>
        <div class = 'col-sm-12'><b>Title : {data.Title}</b></div><br/>
        <div class = 'col-sm-6'>Problem<br/><textarea style={{width:'90%', height:'400px'}}>{data.problem}</textarea></div>
        <div class = 'col-sm-6'>Solution<br/><textarea style={{width:'90%', height:'400px'}}>{data.solution}</textarea></div>
        <div class = 'col-sm-6'>Input : {data.input}</div>
        <div class = 'col-sm-6'>Output : {data.output}</div>
      </div>
        <br />

      <div class = 'col-sm-12'>
        <p>A project by{" "} <a href="https://github.com/goelvinay5"  rel="noopener"  className="small-link">Vinay Goel</a></p>
      </div>
    </div>
  );
}

export default DSA;