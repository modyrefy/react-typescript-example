const LocalStorageSet=(name :string,value:string)=>{
    localStorage.setItem(name,value);
};
const LocalStorageGet=(name:string):string|null=>{
    return  localStorage.getItem(name);
};
const LocalStorageClear=(name:string)=>{
    if(name===null|| name===undefined|| name==='')
    {localStorage.clear();}
    else
    {localStorage.removeItem(name);}
};

export {LocalStorageSet,LocalStorageGet,LocalStorageClear};
