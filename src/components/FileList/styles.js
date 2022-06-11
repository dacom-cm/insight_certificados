import styled from "styled-components";

export const List = styled.div`
  display:flex;
  flex-direction:column;  
`

export const File = styled.div`
  border-radius:5px;
  padding: 8px;
  margin: 4px 0px;
  background: #fff1;

  display: flex;
  align-items:center;
`

export const FileName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FileDownload = styled.a`
  margin-left: auto;
  padding: 5px;
  margin-top:4px;
  
`

export const FileDownloadIcon = styled.img`
  width: 20px;
  transition: 200ms;
  &:hover{
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }
`

export const FileThumb = styled.p`
`