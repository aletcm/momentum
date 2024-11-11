import { Overture } from "@/components/overture"
import { Baseboard } from "@/components/baseboard"

export default function RootPage() {

    return (
        <div className="
            bg-[url('../images/bg.jpg')] bg-cover bg-top h-screen flex flex-col place-content-between
            "
        >
            <div className="pl-1 pt-1 text-xs lg:text-sm">
                Desafio da B7Web: página <b>Momentum com Next, React e Tailwind;</b> por Alessandro Taddei.
            </div>
            <Overture />
            <Baseboard />
        </div>
    )
}
