import axios from "axios"
import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] =  useState('')
    const email = user?.user?.email
    if (email) {
        axios.patch(`http://localhost:5000/login/${email}`, {email})
            .then(function (response) {
                localStorage.setItem("accessToken", response.data)
            })
            .catch(function (error) {
            });
    }
    return [token, setToken]
}

export default useToken;