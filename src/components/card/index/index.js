import Link from "next/link";

const CardContent = ({
  title,
  content,
  buttonText,
  buttonLink,
  imgPath,
  align,
  looks,
}) => {
  let buttonAlign = align == "right" ? "float-right" : "";
  let buttonLooks = looks == "mobile" ? "web" : "";
  return (
    <div className="flex flex-col m-8 sm:m-16 items-center justify-center xl:flex-row lg:flex-row">
      {align == "right" ? (
        <div
          className="w-9/12 h-96 hidden xl:block xl:mr-12 lg:block lg:mr-12 rounded-xl bg-cover bg-center cursor-pointer shadow-lg dark:shadow-black shadow-gray-500 "
          style={{ backgroundImage: `url(${imgPath})` }}
          data-aos="fade-right"
        />
      ) : null}
      <div
        className=" mb-10  xl:hidden lg:hidden flex justify-center shadow-lg dark:shadow-black shadow-gray-500 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgPath})`,
          width: "200px",
          height: "350px",
        }}
        data-aos="fade-right"
        data-aos-delay="0"
      />
      <div className="w-full">
        <div
          className={`text-4xl text-${align} dark:text-white text-gray-700 dark:font-light font-semibold`}
          data-aos="fade-down"
        >
          {title}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-600`}
          data-aos="fade-up"
        >
          {content}
        </div>
        <div className={`flex mt-12 ${buttonAlign}`} data-aos="fade-in">
          <Link href={buttonLink} passHref legacyBehavior>
            <div className="cursor-pointer dark:text-white text-gray-600 border-2 font-bold dark:border-white border-gray-600 py-1.5 px-11 rounded-full hover:bg-gray-500 hover:text-white">
              {buttonText}
            </div>
          </Link>
        </div>
      </div>
      {align == "left" ? (
        <div
          className="w-9/12 h-96 hidden xl:block xl:ml-12 lg:block lg:ml-12 rounded-xl bg-cover bg-center cursor-pointer shadow-lg dark:shadow-black shadow-gray-500"
          style={{ backgroundImage: `url(${imgPath})` }}
          data-aos="fade-right"
        />
      ) : null}
    </div>
  );
};

export default CardContent;
