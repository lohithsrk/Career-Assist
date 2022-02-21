import React,{useState,useEffect} from 'react'
const Papa = require('papaparse');
const Csv = () => {
    const [csv,setCsv] = useState();
    useEffect(() => {
        if(csv) {
            console.log(csv);
        }
    }, [csv])
    const handleChange = (e) => {
        Papa.parse(e.target.files[0], {
            header: true,
            complete: function(results) {
                console.log(results);
                setCsv(results.data);
            }
        });
        
        

    }
  return (
    <div>
        <input type="file" name="file" onChange={handleChange} />
    </div>
  )
}

export default Csv