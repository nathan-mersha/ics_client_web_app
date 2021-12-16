import logo from '../rsr/img/logo.png'
const Login = () => {
    return (


        <div className=" mx-auto h-screen w-full bg-gray-300 py-8">

            <div className="container md:flex  ustify-center mx-auto h-full bg-gray-300">


                <div className="bg-white container mx-auto flex-1 flex justify-center items-center rounded-l-xl shadow-lg flex-col" >
                    
                    <img className='h-16 md:h-24 md:mb-14 md:pt-3' src={logo}></img>

                    <form>
                        
                        <h2 className='text-center text-gray-500 py-7 text-lg font-bold'>Login To Wallet</h2>
                        <label className='text-gray-400 text-xs'>Phone Number</label><br />
                        <input className='mb-5 border-b' type="text" placeholder="phone"></input><br />
                        <label className='text-gray-400 text-xs'>Password</label><br />
                        <input className='mb-7 border-b' type="text" placeholder="password"></input><br />
                        <button type="button" className="bg-black text-white container py-1 rounded shadow-lg font-bold text-sm">Login</button>
                        <div className='flex justify-center py-5' ><h5 className='text-gray-500 text-sm pr-2'>Forgot password ? </h5> <a href="#" className='text-sm'>click here</a></div>
                    </form>
                </div>



               

                <div className="flex-1 rounded-r-xl shadow-lg hover:blur-sm bg-cover bg-no-repeat bg-[url('https://resources.finalsite.net/images/f_auto,q_auto/v1616523196/icsaddiseduet/nlq6phcdlrplv6t5y0wz/Optimized-ezgifcom-gif-maker1copy2.jpg')]">
                    <div className=""></div>
                </div>


            </div>

        </div>

    );


}

export default Login