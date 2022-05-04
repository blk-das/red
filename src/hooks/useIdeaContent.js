import { useState } from 'react'

function useIdeaContent() {
  const [ideaContent, setIdeaContent] = useState({
    file: '', //Para mostrar la imagen
    fileContent: '', //Para enviarla al servidor
    content: ''
  })

  const handleContentChange = (event) => {
    setIdeaContent({
      ...ideaContent,
      [event.target.name]: event.target.value
    })
  }

  const handleFileChange = (event) => {
    let file
    if (event) {
      if (event.dataTransfer) {
        file = event.dataTransfer.files[0]
      } else {
        file = event.target.files[0]
      }
      if (file) {
        var reader = new FileReader()
        reader.onload = function () {
          setIdeaContent({
            ...ideaContent,
            file: reader.result,
            fileContent: file
          })
        }
        reader.readAsDataURL(file)
      }
    } else {
      setIdeaContent({ ...ideaContent, file: null, fileContent: '' })
    }
  }

  return { ideaContent, handleFileChange, handleContentChange }
}

export default useIdeaContent
