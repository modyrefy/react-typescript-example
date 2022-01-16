import React, {FC, useRef, useState} from "react";
import Dropzone, {DropEvent, FileRejection, useDropzone} from 'react-dropzone';
import axios from "axios";
import {DocumentModelCompact} from "../../models/interfaces/document/DocumentModel";
import set = Reflect.set;
import _ from "lodash";
//https://githubhelp.com/Nine0ne/react-dropzone
import {LoadingBox} from "../box/loadingBox";
import {Alert} from "@mui/material";
import {json} from "stream/consumers";
import defaultAxiosApiInstance from "../../axios/defaultAxiosApiInstance";
export const FileDropzone: FC<{}> = () => {
     const {acceptedFiles, fileRejections,getRootProps, getInputProps} = useDropzone(
         //{accept: 'image/*' }
    );
//const [documents,setDocuments]=useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const documents = useRef<File[]>([]);
  const  handleFileReject = (files: FileRejection[]) => {
      let errors: string[] = [];
      files.map((file) => {
          errors.push(`${file.file.name} ${file.errors[0].code}  ${file.errors[0].message}`)
          // fileRejections.push(file);
          // alert(file.file.name +' error '+ file.errors[0].message);

      });
      alert(errors.join("\n"));

  };

    const sleep = (milliseconds: number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
const handleFileDrop = async (files: File[]) => {
    setLoading(true);
    // await sleep(5000);
    //let fileList: File[] = {...documents.current};

    files.map((file) => {
        acceptedFiles.push(file);
        //  console.log('file ' + JSON.stringify(file))
        documents.current.push(file);
        const reader = new FileReader();
        reader.onload = async () => {
            const binaryStr = reader.result;
            try {
                const url = `https://localhost:5001/api/user/upload`;
                const formData = new FormData();
                formData.append('file', file);
                formData.append('fileName', file.name);

                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                };
                const result = await axios.post(url, formData, config);
            } catch (err) {
                console.log('err ' + err);
            }
            // do whatever you want with the file content
        };
        reader.readAsDataURL(file);
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');

        //reader.readAsBinaryString(file);
        // fileList.push(file);
    });
    // console.log('acceptedFiles '+ acceptedFiles.length);
    // console.log('rejectedFile '+ fileRejections.length);
    // console.log('fileList ' + JSON.stringify(documents.current))
    setLoading(false);
    //setDocs(fileList);
    // files.filter(x => x.type.startsWith("image/") || x.type.startsWith("application/pdf"))
    //     .forEach(file => this.addFile(doc, file));
};
    return (
<>
    {loading && <LoadingBox/>}
            <Dropzone
                // maxSize={2097152}
                accept={["image/png", "image/jpeg", "application/pdf"]}
                onDrop={(files: File[]) => {
                    handleFileDrop(files).then(r =>{})
                }}
                onDropRejected={handleFileReject}
            >
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                            <em>(Only files with name less than 20 characters will be accepted)</em>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            {documents.current.map((doc)=>{
                                    return(<ul>{doc.name} --{doc.size}</ul>)
                                })
                            }
                        </aside>
                    </section>
                )}
                {/*<section className="container">*/}
                {/*    <div {...getRootProps({className: 'dropzone'})}>*/}
                {/*        <input {...getInputProps()} />*/}
                {/*        <p>Drag 'n' drop some files here, or click to select files</p>*/}
                {/*    </div>*/}
                {/*    <aside>*/}
                {/*        <h4>Files</h4>*/}
                {/*        <ul>{files}</ul>*/}
                {/*    </aside>*/}
                {/*</section>*/}
            </Dropzone>
    </>
        // <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        //     {({getRootProps, getInputProps}) => (
        //         <section>
        //             <div {...getRootProps()}>
        //                 <input {...getInputProps()} />
        //                 <p>Drag 'n' drop some files here, or click to select files</p>
        //             </div>
        //         </section>
        //     )}
        // </Dropzone>
    );
}
