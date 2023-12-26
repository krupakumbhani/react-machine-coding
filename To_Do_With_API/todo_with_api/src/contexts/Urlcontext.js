import { createContext } from "react";
export const Urlcontext = createContext();
const UrlcontextProvider = (props) => {
    const BaseUrl = "https://dummy.restapiexample.com/api/v1"
    return(
        <Urlcontext.Provider value={{BaseUrl}}>
           {props.children}
        </Urlcontext.Provider>
    )
}
export default UrlcontextProvider