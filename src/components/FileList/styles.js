import styled from "styled-components";

export const List = styled.div`
  display:flex;
  flex-direction:column;  
  gap: 8px;
`

export const File = styled.a`
  border-radius:5px;
  padding: 8px;
  background: #4f4f4f;

  display: flex;
  align-items:center;
  justify-content: space-between;
  gap: 15px;

  color: #e4e4e4;
  transition: 200ms;

  img {
    filter: invert(80%);
    transition: 200ms;
  }

  &:hover{
    background: #eee;
    color: #444;
    img {
      filter: invert(20%);
    }
  }
`

export const FileName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-spacing: 0.9em;
`

export const FileDownload = styled.a`
  padding: 5px;
  margin-top:4px;
  
`

export const FileDownloadIcon = styled.img`
  width: 20px;
`

export const FileThumb = styled.p`
`

export const Title = styled.h5`
  color: #ccc;

`