import * as S from './styles'

export function File(props){
  const { name, downloadLink, thumb } = props;
  if (!downloadLink) return null;

  return(
    <S.File>
      <S.FileName>{name}</S.FileName>
      <S.FileDownload href={downloadLink} >
        <S.FileDownloadIcon src="downloadIcon.png"/>
      </S.FileDownload>
    </S.File>
  )
}

function FileList(props){
  const {files} = props;

  return (
    <S.List>
      {files.map(f => <File {...f} key={`${f.name}-${f.downloadLink}`}/>)}
    </S.List>
  )
}

export default FileList;