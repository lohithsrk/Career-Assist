import React,{useState,useEffect} from 'react'
import { fileUpload } from '../../axios/admin/csv.axios';
const Papa = require('papaparse');
const Csv = () => {
    // const [csv,setCsv] = useState();
    // useEffect(() => {
    //     if(csv) {
    //         console.log(csv);
    //     }
    // }, [csv])
    const handleChange = (e) => {
        Papa.parse(e.target.files[0], {
            header: true,
            complete: function(results) {
                fileUpload(results.data).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
                
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