import { PlayIcon } from "@heroicons/react/24/solid"
import classNames from "classnames"

export const PageController = ({ page, count, setPage, setCount }) => {

    return(
        <div className="flex items-center mb-2">
            <div className="p-2 font-semibold flex w-[99%]">
            Mostrando resultados del {(page - 1) * count + 1} al {(page) * count}
            </div>
            <button
                className={classNames(
                    "flex text-sm py-1 pr-2 pl-1  bg-blue-400 rounded-l-lg text-white  group border border-blue-800",
                    page > 1 ? "hover:bg-blue-500 cursor-pointer" : "cursor-not-allowed"
                )}
                onClick={() => {
                    if (page > 1) {
                        setPage(page - 1)
                    }
                }}
                disabled={page <= 1}
            >
                <PlayIcon className="w-5 h-5 mt-0.5 rotate-180 group-hover:scale-125 transition"/>
                Anterior
            </button>
            <div
                className="flex text-sm py-[5px] px-3  bg-blue-300 text-blue-800 cursor-pointe font-bold border-b border-t border-blue-800"
            >
                {page}
            </div>
            <div
                className="flex text-sm py-1 pl-2 pr-1  bg-blue-400 rounded-r-lg text-white cursor-pointer hover:bg-blue-500 group border border-blue-800"
                onClick={() => {setPage(page + 1)}}
                aria-hidden
            >
                Siguiente
                <PlayIcon className="w-5 h-5 mt-0.5 group-hover:scale-125 transition"/>
            </div>
        </div>
    )
}
