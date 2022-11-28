import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSellers, setIsSellers] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-flame.vercel.app/users/seller/${email}`)
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