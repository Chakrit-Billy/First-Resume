import "./Page2.css";
import BL from "../src/assets/Billy.png";
function Page2() {
  return (
    <>
      <div className='w-[1980px] h-[1080px] bg-[#21242a] pt-[200px]'>
        <div className='flex justify-center'>
          <div className='flex  justify-around px-[150px]'>
            <div className='flex-col h-[600px] relative mr-[200px]'>
              <div className='Box-1 '></div>
              <img
                src={BL}
                alt=''
                className='w-[365px] h-[385px] absolute top-[50px] left-[-50px]'
              />
              <button className='button-1 w-[200px] h-[54px] ml-[82.5px] '>
                <a
                  href='https://drive.google.com/file/d/1thPbFWeAEKARV_tasYgO2cOVVI0Fa67S/view?usp=drive_link'
                  className='text-white '>
                  <i className='fa fa-cloud-download mr-[5px]'></i>
                  Download Resume
                </a>
              </button>
            </div>
            <div className='flex-col justify-center Text'>
              <div className='text-1'>ABOUT ME</div>
              <p className='text-2 '>
                {" "}
                Hello! I’m Chakrit Assbilly. Recent graduate with a fervent
                interest in full-stack development, aiming to secure an
                entry-level role that allows me to apply my technical expertise
                and actively participate in dynamic projects within a
                collaborative setting. Currently enrolled in the Tech Up
                full-stack bootcamp to further enhance my skills.
              </p>
              <ul className='profile-menu'>
                <li>
                  <span>Name: </span> Chakrit Assbilly
                </li>
                <li>
                  <span>Date of birth: </span> 23 Apr 2000
                </li>
                <li>
                  <span>Nationality: </span> Thai
                </li>
                <li>
                  <span>Address: </span> 232/24,Taladyai,Phuket 83000
                </li>
                <li>
                  <span>Phone: </span> 099-2318428
                </li>
                <li>
                  <span>E-Mail: </span> abl.chakrit@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className='text-3 ml-[310px]'>MY INTERESTS</div>

          <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
              <div className='interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg'>
                <div className='icon-decorated'>
                  <i className='fa fa-pencil'></i>
                  <p>Drawing</p>
                </div>
              </div>

              <div className='interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg'>
                <div className='icon-decorated'>
                  <i className='fa fa-plane'></i>
                  <p>Travel</p>
                </div>
              </div>

              <div className='interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg'>
                <div className='icon-decorated'>
                  <i className='fa-brands fa-youtube'></i>
                  <p>Watch youtube</p>
                </div>
              </div>

              <div className='interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg'>
                <div className='icon-decorated'>
                  <i className='fa fa-coffee'></i>
                  <p>Coffee</p>
                </div>
              </div>

              <div className='interest-item flex items-center justify-center  p-4 transition duration-300 transform hover:-translate-y-2 hover:shadow-lg'>
                <div className='icon-decorated'>
                  <i className='fa-solid fa-cart-shopping'></i>
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
