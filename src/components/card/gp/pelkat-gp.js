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
  content24,
  content25,
  content26,
  content27,
  content28,
  content29,
  buttonText,
  buttonLink,
  imgPath,
  align,
}) => {
  let buttonAlign = align == "right" ? "float-right" : "";
  return (
    <div className="flex flex-col m-8 sm:m-40 items-center justify-center xl:flex-row lg:flex-row">
      {align == "right" ? (
        <div
          className="w-96 h-80 hidden xl:block xl:mr-12 lg:block lg:mr-12 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${imgPath})` }}
          data-aos="fade-right"
        />
      ) : null}
      <div
        className="w-full h-80 mb-10 xl:hidden lg:hidden flex justify-center  rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgPath})`,
          maxHeight: 310,
          maxWidth: 270,
        }}
        data-aos="fade-up"
        data-aos-delay="10"
      />
      <div className="w-full">
        <div
          className={`text-4xl text-${align} dark:text-white text-gray-500 font-semibold`}
          data-aos="fade-down"
        >
          {title}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content1} </strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content2}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content3}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content4}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content5}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content6}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content7} </strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content8}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content9}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content10}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content11}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content12}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content13} </strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content14}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content15}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content16}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content17}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content18}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content19}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content20}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content21}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content22}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content23}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          <strong>{content24}</strong>
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content25}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content26}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content27}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content28}
        </div>
        <div
          className={`mt-2 max-sm:text-lg text-base text-${align} dark:text-gray-400 text-gray-700`}
          data-aos="fade-up"
        >
          {content29}
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
