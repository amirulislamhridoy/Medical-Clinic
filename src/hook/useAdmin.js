import { useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const email = user?.email
    if (email) {
        fetch('')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data)
            })
    }
    return [admin, setAdmin]
}

export default useAdmin;