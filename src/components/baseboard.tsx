"use client"

import { useEffect, useState } from "react"

type Quote = {
    id: number,
    phrase: string,
    author: string
}

export const Baseboard = () => {
    const [quotes, setQuotes] = useState<Quote[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const item: Quote = quotes[Math.floor(Math.random() * quotes.length)]

    useEffect(() => { loadQuotes() }, [])

    const loadQuotes = async () => {

        try {
            let reply: Response = await fetch('./quotes.json')
            let data: Quote[] = await reply.json()
            setQuotes(data)
            setLoading(true)
        } catch {
            setQuotes([])
            setLoading(true)
        }
    }

    return (
        <div className="px-1 pb-1 h-32 md:px-0 place-content-end">
            {!loading &&
                <div className="
                    text-base text-center font-semibold [text-shadow:_1px_2px_2px_#000000] mx-auto
                    md:w-4/5 md:text-2xl
                    "
                >
                    Carregando...⏳
                </div>
            }
            {loading && quotes.length === 0 &&
                <div className="
                    text-base text-center font-semibold [text-shadow:_1px_2px_2px_#000000] mx-auto
                    md:w-4/5 md:text-2xl
                    "
                >
                    Ocorreu algum erro no carregamento da citação.🛠️⚙️
                </div>
            }
            {loading && quotes.length > 0 &&
                <div className="mx-auto md:w-4/5">
                    <div className="
                        text-base text-center font-semibold italic [text-shadow:_1px_2px_2px_#000000]
                        md:text-2xl
                        "
                    >
                        {item.phrase}
                    </div>
                    <div className="text-sm text-center [text-shadow:_1px_2px_2px_#000000] md:text-xl">
                        {item.author}
                    </div>
                </div>
            }
        </div>
    )
}
