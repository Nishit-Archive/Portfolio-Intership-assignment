const Heading = ({ className, title, text }: any) => {
  return (
    <div
      className={`${className} max-w-[50rem]  mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {title && <h2 className="h1"> {title} </h2>}
      {text && <p className="mt-4 font-semibold"> {text} </p>}
    </div>
  );
};

export default Heading;
