import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyers, setisBuyers] = useState(false);
    const [isBuyerLoading, setisBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-flame.vercel.app/users/buyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setisBuyers(data.isBuyer);
                    setisBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyers, isBuyerLoading]
}

export default useBuyer;