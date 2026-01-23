import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Footer() {
  return (
    <>
        <div className="bg-[black] mt-10 p-6">
            <div className=" mb-4 text-center text-[14px] font-sans font-semibold text-[#e7e77c] flex justify-evenly">

              <div className='flex gap-3 cursor-pointer'>
                <address>Rangpur,Bangldesh</address>
                <i class="bi bi-back"></i>
              </div>
                
                <div className='flex gap-3 cursor-pointer'>
                  <h3>Phone: +880123456789</h3>
                  <i class="bi bi-telephone-outbound-fill"></i>
                </div>
                <div className='flex gap-3 cursor-pointer'>
                  <h3>Email: jibon@example.com</h3>
                  <i class="bi bi-envelope-check-fill"></i>
                </div>
            </div>
            <hr className="border-gray-600"/>
            
            <h2 className="text-center p-2 text-gray-600 font-sans font-semibold">© 2026 Mini E-commerce. All rights reserved.</h2>
            <h3 className="text-center text-gray-600 font-sans font-semibold">@Copy right Jibon</h3>
        </div>
    </>
  )
}
