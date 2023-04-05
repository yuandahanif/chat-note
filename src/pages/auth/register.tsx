import { useEffect, useState } from "react";
import Button from "@components/buttons/button";
import Input from "@components/form/input";
import MainLayout from "@layouts/main.layout";
import { getAccessToken, register } from "@utils/network-data";
import { Link, useNavigate } from "react-router-dom";
import useInput from "@hooks/useInput";
import useLocalization from "@hooks/useLocalization";

const Register = () => {
  const t = useLocalization();
  const navigate = useNavigate();
  const [accseToken] = useState(getAccessToken());
  const [name, setNameOnChange] = useInput("");
  const [email, setEmailOnChange] = useInput("");
  const [password, setPasswordOnChange] = useInput("");
  const [confirmPassword, setConfirmPasswordOnChange] = useInput("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      const res = await register({ email, name, password });
      if (res.error) {
        throw new Error("");
      }
      alert("berhasil");
      navigate("/login");
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
        <h1 className="text-5xl font-semibold text-slate-600 dark:text-white">
          {t("register")}
        </h1>

        <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
          <Input
            required
            value={name}
            onChange={setNameOnChange}
            label="Nama"
            className="min-w-[500px]"
          />
          <Input
            required
            errorMessage="email tidak valid"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={setEmailOnChange}
            label="Email"
            type="email"
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

          <Input
            required
            value={confirmPassword}
            onChange={setConfirmPasswordOnChange}
            type="password"
            label={t("confirmPassword")}
            className="min-w-[500px]"
          />

          <span className="text-red-500">
            {confirmPassword != password &&
              password != "" &&
              "password harus sama."}
          </span>

          <span className="ml-auto">
            {t("alreadyHaveAnAccount")}{" "}
            <Link to={"/login"}>
              <span className="underline">{t("login")}</span>
            </Link>
          </span>

          <Button
            disabled={confirmPassword != password || password == ""}
            className="justify-center text-center"
          >
            {t("register")}
          </Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Register;
