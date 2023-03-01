import Image from "next/image";

export default function checkEmail() {
  return (
    <>
      <div className="main-wrapper bg-colorThem-100  ">
        <div className="  grid  justify-items-center">
          <div className="image-logo mt-28   ">
            <Image
              src="/images/logo.svg"
              alt="logo-image"
              width={110}
              height={120}
              priority
            ></Image>
          </div>

          <div className="bg-image  mt-10 ">
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

          <div className="context  relative mt-44">
            <div className=" text-center  ">
              <h1 className=" text-3xl  ">Check your email</h1>
              <p className=" mt-5 mx-4  text-gray-500 ">
                We sent you an email with instructions to reset your password
              </p>
            </div>

            <div className="footer  grid place-content-center mt-8   ">
              <button className=" bg-colorThem-100 rounded-xl  w-80 h-16 text-base px-2 py-2 text-white ">
                <a href="#">OK</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
