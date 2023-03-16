import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'


const convertBlobToBase64 = (blob:Blob) =>
new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
        resolve(reader.result)
    }
    reader.readAsDataURL(blob)
})


const writeFile = async (file: { filename: string, data: string, directory: string }) => {

    console.log("writeFile 111: %O", file)

    let fileWork = await Filesystem.writeFile({
        path: file.directory + file.filename,
        data: file.data,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
    })

    console.log("writeFile 222: %O", fileWork)

    return fileWork
}
  
const readFile = async (filename:string) => {

   console.log("attempting read file: %O", filename)
    const contents = await Filesystem.readFile({
        path: filename,
        //directory: Directory.Documents,
        encoding: Encoding.UTF8
    })
    console.log("readfile contents: %O", contents)
    return contents
}
  
const deleteFile = async (filename: string) => {
    await Filesystem.deleteFile({
        path: filename,
        directory: Directory.Documents
    })
}
  
 const readFilePath = async () => {
    // Here's an example of reading a file with a full file path. Use this to
    // read binary data (base64 encoded) from plugins that return File URIs, such as
    // the Camera.
    const contents = await Filesystem.readFile({
        path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
    })
  
    console.log('data:', contents)
}

export default defineNuxtPlugin(() => {

    return {
        provide: {
            convertBlobToBase64: (payload:Blob) => convertBlobToBase64(payload),

            // TODO: Why 'any'? How come Object doesn't work?
            writeFile: (fileToWrite:any) => writeFile(fileToWrite),

            readFile: (filepath:string) => readFile(filepath),
            deleteFile: (filepath:string) => deleteFile(filepath),
        }
      }


})
