import "./Page2.css";
function Page2() {
  return (
    <>
      <div className="w-[1980px] h-[1080px] bg-[#21242a] pt-[200px]">
        <div className="flex justify-center">
          <div className="flex  justify-around px-[150px]">
            <div className="flex-col h-[600px] relative mr-[200px]">
              <div className="Box-1 "></div>
              <img
                src="src/assets/Billy.png"
                alt=""
                className="w-[365px] h-[385px] absolute top-[50px] left-[-50px]"
              />
              <button className="button-1 w-[200px] h-[54px] ml-[82.5px] ">
                <a href="#" className="text-white ">
                  <i className="fa fa-cloud-download mr-[5px]"></i>
                  Download Resume
                </a>
              </button>
            </div>
            <div className="flex-col justify-center Text">
              <div className="text-1">ABOUT ME</div>
              <p className="text-2 ">
                {" "}
                Hello! I’m Oliver Queen. Web Developer with over 8 years of
                experience. Experienced with all stages of the development cycle
                for dynamic web projects. Having an in-depth knowledge including
                advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong
                background in management and leadership.
              </p>
              <ul className="profile-menu">
                <li>
                  <span>Name: </span> Oliver Queen
                </li>
                <li>
                  <span>Date of birth: </span> 14 February 1986
                </li>
                <li>
                  <span>Nationality: </span> Citizen Of Envato
                </li>
                <li>
                  <span>Address: </span> 23 High Hope Blvd., Some City, Some
                  Country
                </li>
                <li>
                  <span>Phone: </span> (123) - 456-7890, (123) - 456-7890
                </li>
                <li>
                  <span>E-Mail: </span> oliver.queen@yahoo.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3 ml-[310px]">MY INTERESTS</div>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <div className="interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <div className="icon-decorated">
                  <i className="fa fa-pencil"></i>
                  <p>Drawing</p>
                </div>
              </div>

              <div className="interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <div className="icon-decorated">
                  <i className="fa fa-plane"></i>
                  <p>Travel</p>
                </div>
              </div>

              <div className="interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <div className="icon-decorated">
                  <i className="fa-brands fa-youtube"></i>
                  <p>Watch youtube</p>
                </div>
              </div>

              <div className="interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <div className="icon-decorated">
                  <i className="fa fa-coffee"></i>
                  <p>Coffee</p>
                </div>
              </div>

              <div className="interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                <div className="icon-decorated">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Shopping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page2;
