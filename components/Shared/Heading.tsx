const Heading = ({ className, title, text }: any) => {
  return (
    <div
      className={`${className} max-w-[50rem]  mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* {title && <h2 className="h1 text-center"> {title} </h2>} */}
      {title && (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>
      )}
      {text && <p className="mt-4 font-semibold text-center"> {text} </p>}
    </div>
  );
};

export default Heading;
