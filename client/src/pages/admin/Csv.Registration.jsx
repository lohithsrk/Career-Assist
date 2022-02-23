import React,{useState,useEffect} from 'react'
import { fileUpload } from '../../axios/admin/csv.axios';
const Papa = require('papaparse');
const Csv = () => {
    // const [csv,setCsv] = useState();
    const [parsecsv,setParsecsv] = useState();
    // useEffect(() => {
    //     if(csv) {
    //         console.log(csv);
    //     }
    // }, [csv])
    const handleChange = (e) => {
        Papa.parse(e.target.files[0], {
            header: true,
            complete: function(results) {
                setParsecsv(results.data);
                
            }
        });
        
        

    }
    const handleSubmit = (e) => {
        fileUpload(parsecsv).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <div>
        <form action="">

        <input type="file" name="file" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}></button>
        </form>
    </div>
  )
}

export default Csv