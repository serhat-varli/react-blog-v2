import { useEffect, useState } from "react";

export default function UseFetchs(url, method = "GET") {

    const [data, setDate] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [options, setOption] = useState(null);

    const postData = (data) => {
        setOption({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }


    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async (fetchOptions) => {
            setLoading(true)

            try {
                const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json();
                setLoading(false)
                setDate(data)
                setErrors(null)
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Veri çekilme iptal edildi.")
                }
                else {
                    setLoading(false)
                    setErrors("veriler çekilemedi. ")
                }
            }
        }
        if (method === "GET") {
            fetchData()
        }
        else if (method === "POST" && options) {
            fetchData(options)
        }


        return () => {
            controller.abort()
        }
    }, [url, method, options])
    return { data, errors, loading, postData }
}