"use client"

import { useState } from "react"

export const Overture = () => {

    const greetingsList = () => {
        let now: Date = new Date()
        let hour: number = now.getHours()

        if (hour >= 6 && hour < 12) {
            return "Bom dia!"
        } else if (hour >= 12 && hour < 18) {
            return "Boa tarde!"
        } else {
            return "Boa noite!"
        }
    }

    const [clock, setClock] = useState<string>(new Date().toLocaleTimeString())
    const [greeting, setGreeting] = useState<string>(greetingsList())

    const updateAll = () => {
        setClock(new Date().toLocaleTimeString())
        setGreeting(greetingsList())
    }
    setInterval(updateAll)

    return (
        <div className="text-center">
            <div className="
                text-6xl [text-shadow:_2px_8px_8px_#000000] min-[380px]:text-7xl sm:text-8xl min-[820px]:text-9xl
                "
                suppressHydrationWarning
            >
                {clock}
            </div>
            <div className="text-2xl font-semibold [text-shadow:_2px_4px_4px_#000000] md:text-4xl">
                {greeting}
            </div>
        </div>
    )
}
