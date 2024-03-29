const RainbowHeader = () => {
  return (
    <header className="absolute top-0 left-0 flex w-full bg-white [&>div]:flex-grow">
      <div className="h-20 bg-orange-500"></div>
      <div className="h-20 bg-yellow-500"></div>
      <div className="h-20 bg-red-500"></div>
      <div className="h-20 bg-green-500"></div>
      <div className="h-20 bg-purple-500"></div>
      <div className="h-20 bg-blue-500"></div>
    </header>
  );
};

export default RainbowHeader;
