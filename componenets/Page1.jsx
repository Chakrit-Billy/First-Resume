import "./Page1.css"; // Import custom CSS file for Page1 component

function Page1() {
  return (
    <>
      <img
        src="https://comeout.netlify.app/demo/default/img/header-bg.jpg"
        alt=""
        className="z-[-1] absolute w-[1980px] #40b471"
      />
      <div className="w-[1980px] h-[1065px] bg-no-repeat bg-cover px-[100px] flex items-center relative gradient-bg">
        <div className="text-white flex flex-col justify-center w-[1920px] h-[1080px] ">
          <p className="text-[112px]">Hello!</p>
          <p className="text-[112px]">
            <strong>Chakrit Assbilly</strong>
          </p>
          <p className="text-[64px]">Full-stack developer</p>
        </div>
      </div>
    </>
  );
}

export default Page1;
