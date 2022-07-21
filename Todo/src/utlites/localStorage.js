export const getData=(value)=>{
    return localStorage.getItem(value);

}
export const postData=(val,data)=>{
    if(val && data){
        return localStorage.setItem(val,data);
    }
}