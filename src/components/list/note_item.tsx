import { MouseEventHandler, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const NoteListItem: React.FC<{
  id?: string;
  title: string;
  body: string;
}> = ({ body, id, title }) => {
  const [isMenuExpand, setIsMenuExpand] = useState(false);
  const menuRef = useRef<null | HTMLDivElement>(null);

  const toggleMenuExpand: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (menuRef.current) {
      setIsMenuExpand((s) => !s);
    }
  };

  return (
    <div className="flex items-stretch justify-start rounded-md bg-[#FDEBED] text-slate-700">
      <button
        type="button"
        className="w-full rounded-l-md p-2 duration-300 hover:bg-[#F4BFBF] hover:text-white"
      >
        <div className="flex justify-start ">
          <span className="line-clamp-1 text-lg font-medium">{title}</span>
        </div>
        <div className="flex justify-start">
          <p className="line-clamp-1 text-left text-sm">{body}</p>
        </div>
      </button>

      <div className="flex">
        <button
          onClick={toggleMenuExpand}
          title="Hapus Catatan"
          className="p-2 px-4 duration-300 hover:bg-[#FD8A8A] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={twMerge(
              "h-6 w-6 duration-200",
              isMenuExpand ? "rotate-180" : "rotate-0"
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div
          ref={menuRef}
          className={twMerge(
            "origin-right duration-500 flex overflow-hidden",
            isMenuExpand ? "static visible scale-x-100" : "absolute invisible scale-x-50 -z-20"
          )}
        >
          <button
            title="Hapus Catatan"
            className="p-2 px-4 duration-300 hover:bg-[#FD8A8A] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </button>
          <button
            title="Hapus Catatan"
            className=" rounded-r-md p-2 px-4 duration-300 hover:bg-[#FD8A8A] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteListItem;
