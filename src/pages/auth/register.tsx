import Button from "../../components/buttons/button";
import Input from "../../components/form/input";
import MainLayout from "../../layouts/main.layout";

const Register = () => {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl">Daftar</h1>

        <form className="flex flex-col gap-y-4">
          <Input label="Username" className="min-w-[500px]" />
          <Input label="Password" className="min-w-[500px]" />

          <Button className="justify-center text-center">Daftar</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Register;
