import XMLHttpRequest from "xmlhttprequest";
import { customLog } from "../utils/customLog.js";

export const uploadFile = (file, signedRequest) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest.XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
            customLog("Blog post successfully uploaded to AWS", 'success');
        }
        else {
          customLog('Could not upload blog post to AWS.', 'error');
          reject(new Error(`There was a problem uploading the post to AWS. The response code was ${xhr.status}`));
        }
      }
    };
    xhr.send(file);
    resolve();
  })
}
