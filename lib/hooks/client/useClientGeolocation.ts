import {useEffect, useState} from "react";
import axios from "axios";
import {GeolocationApiResponse} from "@/types/geolocation-api-response";

export default function UseClientGeolocation() {
    const [isLoading, setIsLoading] = useState<boolean>()
    const [data, setData] = useState<GeolocationApiResponse>()

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://ipwho.is/')
            .then(res => {
                setIsLoading(false)
                setData(res.data)
            });
    }, []);

    return {isLoading, data}
}