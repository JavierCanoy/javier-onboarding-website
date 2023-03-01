import Image from "next/image";

export default function home() {
  return (
    <>
      <div className="color-background flex  bg-colorThem-100 h-screen  ">
        <div className="image-logo self-center">
          <a href="/components/create-sign">
            <Image
              src="/images/1.svg"
              alt="Illustration"
              width={579}
              height={100}
              priority
            ></Image>
          </a>
        </div>
      </div>
    </>
  );
}
