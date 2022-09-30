import { useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const email = user?.email
    if (email) {
        fetch(`https://medical-clinic-server.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
    }
    return [admin, setAdmin]
}

export default useAdmin;