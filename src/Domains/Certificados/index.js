
import { gapi } from "gapi-script";
import CONFIG_FILE  from "../../config/drive-api.config.json"

export async function teste(){
  const SCOPES = ['https://www.googleapis.com/auth/drive'];
  // const auth =  new google.auth.JWT(
  //   CONFIG_FILE.client_email, null,
  //   CONFIG_FILE.private_key, SCOPES,
  // )
  let gapiClient = loadClientAuth2(gapi, 'my-project-haken', SCOPES);
  // gapi.auth
  // const drive = google.drive({version:"v3", auth})
  
  // drive.files.list({}, (err, res) => {
  //   if(err) throw err

  //   const files = res.data.files

  //   if(files.length) {
  //     files.map( file => {
  //       console.log(file);
  //     })
  //   } else {
  //     console.log('no files found');
  //   }
  // })
}
