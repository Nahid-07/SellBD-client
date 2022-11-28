import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSellers, setIsSellers] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSellers(data.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSellers, isSellerLoading]
}

export default useSeller;