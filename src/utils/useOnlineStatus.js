import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [OnlineStatus, setonlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline",() => {
            setonlineStatus(false);
        });

        window.addEventListener("online",() => {
            setonlineStatus(true);
        });

    },[]);


    return OnlineStatus;
}
export default useOnlineStatus;