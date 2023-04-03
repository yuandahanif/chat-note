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
          <Link to={`note/`}>Mulai Menulis</Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
