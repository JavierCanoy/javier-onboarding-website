import Image from "next/image";

export default function Sign() {
  return (
    <>
      <div className="main-wrapper bg-colorThem-100">
        <div className="  grid  justify-items-center">
          <div className="image-logo mt-10 ">
            <Image
              src="/images/logo.svg"
              alt="logo-image"
              width={110}
              height={120}
              priority
            ></Image>
          </div>

          <div className="bg-image mt-5   ">
            <div className="bg-image  grid  justify-items-center">
              <Image
                className=" absolute "
                src="/images/background.png"
                alt="white-bg"
                width={375}
                height={535.05}
                priority
              ></Image>
            </div>
          </div>

          <div className="context  relative   mt-28">
            <div className=" text-center  ">
              <h1 className="    text-3xl  ">Sign in</h1>
              <p className="    mt-5 indent-4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="login-google flex justify-center  ">
              <button className="  flex  border shadow-sm   mt-10 rounded-xl w-80  h-16 px-2 py-2    ">
                <Image
                  className=" self-center mx-8"
                  src="/images/btnSigninwithGoogle.svg"
                  alt="google-logo"
                  width={30}
                  height={30}
                  priority
                ></Image>
                <p className="grid place-self-center">Continue With Google</p>
              </button>
            </div>

            <div className=" flex  items-center    mt-5   ">
              <div className="flex-grow border-t "></div>
              <span className="  text-gray-400 font-normal text-base mx-4 ">
                OR
              </span>
              <div className="flex-grow border-t"></div>
            </div>

            <div className="login-google flex justify-center  ">
              <button className=" flex    border shadow-sm   mt-5 rounded-xl w-80  h-16 px-2 py-2    ">
                <Image
                  className=" self-center mx-8"
                  src="/images/mail.svg"
                  alt="mail-logo"
                  width={30}
                  height={30}
                  priority
                ></Image>
                <a
                  href="/components/sign-in"
                  className="grid place-self-center font-semibold"
                >
                  Continue With Email
                </a>
              </button>
            </div>

            <div className="footer mt-10">
              <p className=" text-center">
                Don’t have an account?
                <a href="/" className="underline text-sky-700 px-2">
                  Signup here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
