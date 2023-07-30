import { createContext, useState } from "react";

export const TokenAuten = createContext()

export function TokenProvider({ children }) {

    const [token, setToken] = useState({})
    const [infCard, setInfCard] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [text, setText] = useState(false)


    return (

        <TokenAuten.Provider value={{ token, setToken, disabled, setDisabled, infCard, setInfCard }}>
            {children}
        </TokenAuten.Provider>

    )

}