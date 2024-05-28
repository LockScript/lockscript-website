const Section = ({ header }: { header: string }) => {
  return (
    <h1 className="text-center text-4xl font-semibold text-white dark:text-white lg:text-6xl">
      {header}
    </h1>
  );
};

export default Section;
