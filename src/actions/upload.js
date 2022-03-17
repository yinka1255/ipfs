
import {doPostUpload} from '../utils/server';

async function uploadAction(payload, setProgress) {
    try{
      const res = await doPostUpload(payload, 'add', setProgress)
      return new Promise((resolve) => {
        resolve(res);
      })
    }
    catch(error){
      throw(error)
    }  
}
export {uploadAction}
