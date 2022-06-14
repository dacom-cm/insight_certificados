import * as S from './styles'

export function File(props){
  const { name, downloadLink, thumb } = props;
  if (!downloadLink) return null;

  return(
    <S.File href={downloadLink}>
      <S.FileName>{name.substring(15)}</S.FileName>
      <S.FileDownloadIcon src="downloadIcon.png"/>
    </S.File>
  )
}

function FileList(props){
  const {files} = props;

  return (
    <S.List>
      {files.length > 0 ?
        (<>
          <S.Title>Certificados encontrados:</S.Title>
          {files.map(f => <File {...f} key={`${f.name}-${f.downloadLink}`}/>)}
        </>)
      :
        <S.Title style={{textAlign: 'center'}}>Não encontramos nenhum certificado com esse cpf :(</S.Title>
      }
    </S.List>
  )
}

export default FileList;