import Link from "next/link";

const CardContent1 = ({
  title,
  content,
  buttonText,
  imgPath,
  align,
}) => {
  let buttonAlign = align == "right" ? "float-right" : "";
  return (
    <div className="flex flex-col m-8 sm:m-16 items-center justify-center xl:flex-row lg:flex-row">
      {align == "right" ? (
        <div
          className="w-4/5 h-80 hidden xl:block xl:mr-12 lg:block lg:mr-12 border border-wood-cream rounded-xl bg-cover bg-center"
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
          className={`text-4xl text-${align} text-wood-cream font-light`}
          data-aos="fade-down"
        >
          {title}
        </div>
        <div
          className={`mt-2 text-base text-${align} text-gray-400`}
          data-aos="fade-up"
        >
          {content}
        </div>
      </div>
      {align == "left" ? (
        <div
          className="w-4/5 h-80 hidden xl:block xl:ml-12 lg:block lg:ml-12 border border-wood-cream rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${imgPath})` }}
          data-aos="fade-right"
        />
      ) : null}
    </div>
  );
};

export default CardContent1;

{
  /* <div className='w-full hidden xl:block xl:mr-20 lg:block lg:mr-20'>
              <Image src={imgPath} layout='fixed' width={imgW} height={imgH} />
            </div> */
}

// <div className=''>
//   <div className='w-full hidden xl:block xl:ml-20 lg:block lg:ml-20'>
//     <Image src={imgPath} layout='fixed' width={imgW} height={imgH} />
//   </div>
// </div>
// <div />
