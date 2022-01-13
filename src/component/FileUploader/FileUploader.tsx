import {FC, useEffect, useRef, useState} from "react";
import {Upload ,UploadListItemProps} from '@progress/kendo-react-upload';
import {UploadOnStatusChangeEvent} from "@progress/kendo-react-upload/dist/npm/interfaces/UploadOnStatusChangeEvent";
import {UploadFileInfo} from "@progress/kendo-react-upload/dist/npm/interfaces/UploadFileInfo";
import {Link} from "react-router-dom";


const fileStatuses = ['UploadFailed', 'Initial', 'Selected', 'Uploading', 'Uploaded', 'RemoveFailed', 'Removing'];

// export interface FileUploader {
//     DocumentServiceId: number,
//     UploadFileInfo: UploadFileInfo
//
// }

//https://stackblitz.com/edit/react-bvfjbb?file=app/main.jsx
//documentServiceId:number
export const FileUploader: FC<{}> = () => {
    const [files, setFiles] = useState<UploadFileInfo[]>([]);
    const [events, setEvents] = useState<string[]>([]);
    const [filePreviews, setFilePreviews] = useState({});
    const [affectedFiles, setAffectedFiles] = useState<UploadFileInfo[]>([]);
    const requestIntervalRef = useRef({});
    const progressRef = useRef({});

    //# region events
    const onAdd = (event: UploadOnStatusChangeEvent) => {
        console.log("onadd");
        setFiles(event.newState);
        setEvents([...events, `File selected: ${event.affectedFiles[0].name}`]);
        setAffectedFiles(event.affectedFiles);
    };
    const onRemove = (event: any) => {
        let newFilePreviews = {
            ...filePreviews
        };
        // @ts-ignore
        event.affectedFiles.forEach(file => {
            // @ts-ignore
            delete newFilePreviews[file.uid];
        });
        setFiles(event.newState);
        // @ts-ignore
        setEvents([...events, `File removed: ${event.affectedFiles[0].name}`]);
        setFilePreviews(newFilePreviews);
    };
    const onProgress = (event: any) => {
        console.log("onProgress");
        setFiles(event.newState);
        // @ts-ignore
        setEvents([...events, `On Progress: ${event.affectedFiles[0].progress} %`]);
    };
    const onStatusChange = (event: UploadOnStatusChangeEvent) => {
        const file = event.affectedFiles[0];
        console.log('onStatusChange' + file.status);
        setFiles(event.newState);
        setEvents([...events, `File '${file.name}' status changed to: ${fileStatuses[file.status]}`]);
    };
    //# endregion
    const onSave = (files: UploadFileInfo[], options: any, onProgress: any) => {
        const file = files[0];
        console.log("on-save");
        const uid = files[0].uid;
        // Simulate save request
        const saveRequestPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                alert(uid);
                resolve({uid: uid});
            }, 300);
            // // @ts-ignore
            // requestIntervalRef.current[uid] = setInterval(
            //     () => {
            //         // @ts-ignore
            //         onProgress(uid, {loaded: progressRef.current[uid], total: 100});
            //         // @ts-ignore
            //         if (progressRef.current[uid] === 100) {
            //             resolve({ uid: uid });
            //             //      delete progressRef.current[uid];
            //             // @ts-ignore
            //             clearInterval(requestIntervalRef.current[uid]);
            //         } else {
            //             reject({ uid: uid })
            //             alert('error');
            //             // @ts-ignore
            //             progressRef.current[uid] = progressRef.current[uid] + 1;
            //         }
            //     },
            //     40
            // );
        });

        return saveRequestPromise;
    };
    const onRemoveRequest = (files: UploadFileInfo[], options: any) => {
        const uid = files[0].uid;
        // Simulate remove request
        const removeRequestPromise = new Promise((resolve) => {

            setTimeout(() => {
                alert(uid);
                resolve({uid: uid});
            }, 300);
        });

        return removeRequestPromise;
    };
    useEffect(() => {
        // @ts-ignore
        affectedFiles.filter(file => !file.validationErrors).forEach(file => {
            const reader = new FileReader();

            reader.onloadend = ev => {
                setFilePreviews({
                    ...filePreviews,
                    // @ts-ignore
                    [file.uid]: ev.target.result
                });
            };
            // @ts-ignore
            if (file && file.getRawFile) {
                // @ts-ignore
                reader.readAsDataURL(file.getRawFile());
            }
        });
    }, [affectedFiles, filePreviews]);
    // @ts-ignore


    const CustomListItemUI = (props: UploadListItemProps) => {
        return (
            <>
                {
                    props.files.map(doc =>
                    {
                        return(
                            <>
                                <Link to={doc.name} target="_blank" download><li key={doc.name}>{doc.name}</li></Link>
                                <button >X</button>
                            </>
                        )

                    })
                }
            </>);
    };
    const CustomListItemUINullable = (props: UploadListItemProps) => {
        return (<>fileName</>)
    };
    return (<>
        <div>
            {/*<input name="files" id="files" type="file" multiple={true} />*/}
            <Upload
                batch={false}
                multiple={true}
                files={files}
                onAdd={onAdd}
                onRemove={onRemove}
                onProgress={onProgress}
                onStatusChange={onStatusChange}
                withCredentials={false}
                listItemUI={CustomListItemUI}
                 //listItemUI={CustomListItemUI}
                //saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                // @ts-ignore
                saveUrl={onSave}
                //removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
                // @ts-ignore
                removeUrl={onRemoveRequest}
            />
            {/*<div className={'example-config'} style={{*/}
            {/*    marginTop: 20*/}
            {/*}}>*/}
            {/*    <ul className={'event-log'}>*/}
            {/*        {events.map((event, index) => <li key={index}>{event}</li>)}*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {/*{files.length && <div>*/}
            {/*    /!*<h3>files </h3>*!/*/}
            {/*    {*/}
            {/*        files.map((file, index) => {*/}
            {/*                return (*/}
            {/*                    <>*/}
            {/*                        <Link to={file.name} target="_blank" download>*/}
            {/*                            <li key={index}>{file.name}</li>*/}
            {/*                        </Link>*/}
            {/*                        <button>X</button>*/}
            {/*                    </>*/}
            {/*                )*/}

            {/*            }*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>}*/}

            {/*{files.length ? <div className={'img-preview example-config'}>*/}
            {/*    <h3>Preview selected images</h3>*/}
            {/*    {*/}
            {/*        // @ts-ignore*/}
            {/*        Object.keys(filePreviews).map((fileKey, index) => <img src={filePreviews[fileKey]} alt={'image preview'} style={{*/}
            {/*        width: 200,*/}
            {/*        margin: 10*/}
            {/*    }} key={index} />)}*/}
            {/*</div> : undefined}*/}
        </div>
    </>)
};
