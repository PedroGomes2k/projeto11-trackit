import { createContext, useState } from "react";

export const TokenAuten = createContext()

export function TokenProvider({ children }) {

    const [token, setToken] = useState({})
    const [infCard, setInfCard] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [habitDay, setHabitDay] = useState([])


    return (

        <TokenAuten.Provider value={{ token, setToken, disabled, setDisabled, infCard, setInfCard, habitDay, setHabitDay }}>
            {children}
        </TokenAuten.Provider>

    )

}