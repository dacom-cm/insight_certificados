import axios from "axios";

export async function request(cpf){
  const {data} = await axios.get("http://localhost:3334/drive/getAllFiles")
  console.log({data});
  return data.files
}