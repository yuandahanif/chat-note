import LogoHandDraw from "../../assets/LogoHandDraw";
import { Link } from "react-router-dom";
import MainLayout from "@layouts/main.layout";
import ButtonWithIcon from "@components/buttons/buttonWithIcon";

const Landing = () => {
  return (
    <MainLayout>
      <div className="flex h-auto w-full flex-col items-center justify-center">
        <LogoHandDraw />

        <span className="text-xl">
          Tulis catatanmu seperti kamu menulis surat cinta untuk dirinya.
        </span>

        <div className=" mt-10 flex items-center gap-x-5">
          <Link to={`login/`}>
            <ButtonWithIcon
              title="Masuk"
              icon={
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
              }
            />
          </Link>
          <span>atau</span>
          <Link to={`register/`}>
            <ButtonWithIcon
              title="Daftar"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              }
            />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
