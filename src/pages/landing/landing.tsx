import LogoHandDraw from "../../assets/LogoHandDraw";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/main.layout";

const Landing = () => {
  return (
    <MainLayout>
      <div className="flex h-auto w-full flex-col items-center justify-center">
        <LogoHandDraw />

        <span className="text-xl">
          Tulis catatanmu seperti kamu menulis surat cinta untuk dirinya.
        </span>

        <div className="mt-10">
          <Link to={`note/`}>
            <button
              type="button"
              className="mt-10 flex items-center rounded-md bg-red-300 p-3 text-white duration-300 hover:bg-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <span className="inline-flex border-l border-white pl-2">
                Mulai Menulis
              </span>
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
