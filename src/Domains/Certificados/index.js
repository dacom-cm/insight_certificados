import axios from "axios";

export async function request(cpf, token){
  try{
    const { data } = await axios.post("http://localhost:3334/drive/getFilesByCpf", { 
      cpf, 
      token
    });
    
    //console.log({data});
    return data.files
  }catch(e){
    console.log(e);
  }
}