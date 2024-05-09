import { Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*Izquierda*/}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 rounded-lg text-white">
              HectorE.Garcia
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. you can sign up with google or your e-mail
            and password.
          </p>
        </div>
        {/*Derecha*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4 ">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <div className="color=green ">
              <Button
                className="mt-1 text-4xl font-bold bg-blend-color-burn text-blue-800"
                color="green"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to="/singin" className="text-blue-500">
            Sing In
          </Link>
        </div>
      </div>
    </div>
  );
}
