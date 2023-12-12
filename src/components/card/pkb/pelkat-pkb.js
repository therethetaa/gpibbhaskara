import Link from "next/link";

const CardContent = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  content8,
  content9,
  content10,
  content11,
  content12,
  content13,
  content14,
  content15,
  content16,
  content17,
  content18,
  content19,
  content20,
  content21,
  content22,
  content23,
  buttonText,
  buttonLink,
  imgPath,
  align,
}) => {
  let buttonAlign = align == "right" ? "float-right" : "";
  return (
    <div className="flex flex-col m-8 sm:m-16 items-center justify-center xl:flex-row lg:flex-row">
      {align == "right" ? (
        <div
          className=" w-60 h-48 hidden xl:block xl:mr-12 lg:block lg:mr-12 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${imgPath})` }}
          data-aos="fade-right"
        />
      ) : null}
      <div
        className="w-full h-80 mb-10 xl:hidden lg:hidden flex justify-center border border-wood-cream rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${imgPath})` }}
      />
      <div className="w-full">
        <div
          className={`text-3xl text-${align} dark:text-white text-gray-500 font-semibold`}
          data-aos="fade-down"
        >
          {title}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content1} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content2}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong> {content3} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content4}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content5} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content6}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content7} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content8}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content9} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content10}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content11} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content12}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content13} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content14}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content15} </strong>
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content16}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content17}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content18}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content19}
        </div>
        <div
          className={`mt-2 text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content20}
        </div>
      </div>
      {align == "left" ? (
        <div
          className="w-96 h-72 hidden xl:block xl:ml-12 lg:block lg:ml-12 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${imgPath})` }}
          data-aos="fade-right"
        />
      ) : null}
    </div>
  );
};

export default CardContent;
