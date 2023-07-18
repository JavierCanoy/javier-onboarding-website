import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    const userData = data;
    console.log(userData, "User Data ! ");
    console.log(userData.email, " Email ");
    console.log(userData.password, "Password ");

    // http://3.1.201.194:3001/users/login
    fetch(`${process.env.NEXT_PUBLIC_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      router.push("/");
    } else {
      setErrorMessage(errorData.error);
    }
  };

  return (
    <>
      <div className="main-wrapper bg-colorThem-100  ">
        <div> javier bernadas canoy ~  </div>
        <div>  from main ! javier bernadas canoy ~  </div>

        <div className="  grid  justify-items-center">
          <div className="image-logo mt-6">
            <Image
              src="/images/logo.svg"
              alt="logo-image"
              width={110}
              height={120}
              priority
            ></Image>
          </div>

          <div className="bg-image  my-4 ">
            <div className="bg-image  grid  justify-items-center">
              <Image
                className=" absolute h-4/5"
                src="/images/background.png"
                alt="white-bg"
                width={375}
                height={535.05}
                priority
              ></Image>
            </div>
          </div>

          <div className="context  relative mt-24">
            <div className=" text-center  ">
              <h1 className="    text-3xl  ">Sign in</h1>
              <p className="    mt-5 indent-4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email flex justify-center mt-5 ">
                <div className=" relative ">
                  <input
                    {...register("email", {
                      required: "Email is Required !",
                    })}
                    className="w-80 h-16 pl-20   rounded-xl border shadow-sm  placeholder:text-gray-400  "
                    placeholder="jackmadani@gmail.com"
                    aria-label="email"
                    type="email"
                  />
                  <Image
                    className=" absolute top-0 mt-2  mx-4 text-gray-300"
                    src="/images/usericon.svg"
                    alt="usericon"
                    width={46}
                    height={46}
                    priority
                  ></Image>
                  <p className="text-red-500 px-5">{errors.email?.message}</p>
                </div>
              </div>
              <div className="password flex justify-center mt-5 ">
                <div className=" relative  ">
                  <input
                    {...register("password", {
                      required: "Password is Required !",
                    })}
                    className="w-80 h-16 pl-20   rounded-xl border shadow-sm  placeholder:text-gray-400 "
                    placeholder="Password"
                    aria-label="password"
                    type="password"
                  />
                  <Image
                    className=" absolute top-0 mt-2  mx-4 text-gray-300"
                    src="/images/iconlock.svg"
                    alt="iconlock"
                    width={46}
                    height={46}
                    priority
                  ></Image>
                  <p className=" text-red-500 px-5">
                    {errors.password?.message}
                  </p>
                </div>
              </div>

              <div className="checkbox mx-8   mt-5 ">
                <div className="text-sm leading-5 font-normal inline-flex items-center text-gray-500">
                  <input
                    type="checkbox"
                    className="  mr-2 w-4 h-4 border-gray-300 "
                  />
                  <span>Remember Me</span>
                </div>
              </div>
              <div className="  grid place-content-center mt-5   ">
                <button
                  className="bg-colorThem-100 rounded-xl  w-80 h-16 text-base px-2 py-2 text-white "
                  type="submit"
                >
                  SIGN IN
                </button>
              </div>
            </form>
            <div className=" text-center  mt-5 ">
              <p className="  text-sm	 text-gray-500  ">
                By continuing you agree to JobsQ condition of use and privacy
                notice
              </p>
            </div>

            <div className="footer mt-5 text-gray-500">
              <p className=" text-center text-sm	">
                Don't remember password?
                <a
                  href="/components/forgot-password"
                  className="underline text-sky-700 px-2"
                >
                  Forgot password
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
