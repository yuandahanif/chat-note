import { useEffect, useState } from "react";
import Button from "@components/buttons/button";
import Input from "@components/form/input";
import MainLayout from "@layouts/main.layout";
import { getAccessToken, login, register } from "@utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import useInput from "@hooks/useInput";

const Login = () => {
  const navigate = useNavigate();
  const [accseToken] = useState(getAccessToken());
  const [name, setNameOnChange] = useInput();
  const [email, setEmailOnChange] = useInput();
  const [password, setPasswordOnChange] = useInput();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      const res = await login({ email, password });
      if (res.error) {
        throw new Error("");
      }
      alert("berhasil");
      navigate("/note");
    } catch (error) {
      console.error(error);
      alert("gagal mendaftar");
    }
  };

  useEffect(() => {
    if (accseToken) {
      navigate("/note");
    }
  }, [accseToken]);

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold text-slate-600 dark:text-white">Masuk</h1>

        <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
          <Input
            required
            errorMessage="email tidak valid"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            type="email"
            onChange={setEmailOnChange}
            label="Email"
            className="min-w-[500px] invalid:border-pink-600"
          />
          <Input
            required
            value={password}
            onChange={setPasswordOnChange}
            type="password"
            label="Password"
            className="min-w-[500px]"
          />

          <span className="ml-auto">
            Belum punya akun?{" "}
            <Link to={"/register"}>
              <span className="underline">Daftar</span>
            </Link>
          </span>

          <Button className="justify-center text-center">Daftar</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Login;
