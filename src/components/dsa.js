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
        <div class = 'col-sm-12' style={{marginLeft:'20px'}}><br/>
          <select id="lang" onChange={handleClick}>
              <option value="select">Select</option>
              <option value="arrayrotation">Array Rotation</option>
              <option value="arrayprefixsum">Array PrefixSum</option>
              <option value="arraycarryforward">Array Carry Forward</option>
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
        <div class = 'col-sm-12'><div style={{marginLeft:'20px'}}><b>Title : {data.Title}</b></div></div><br/>
        <div class = 'col-sm-6'><div style={{marginLeft:'20px'}}><b>Problem</b><br/><textarea disabled='true' style={{width:'95%', height:'400px'}}>{data.problem}</textarea></div></div>
        <div class = 'col-sm-6'><b>Solution</b><br/><textarea disabled='true' style={{width:'95%', height:'400px'}}>{data.solution}</textarea></div>
        <div class = 'col-sm-6'><div style={{marginLeft:'20px'}}><b>Input :</b> {data.input}</div></div>
        <div class = 'col-sm-6'><b>Output :</b> {data.output}</div>
      </div>
        <br />

      <div class = 'col-sm-12'>
        <p>A project by{" "} <a href="https://github.com/goelvinay5"  rel="noopener"  className="small-link">Vinay Goel</a></p>
      </div>
    </div>
  );
}

export default DSA;