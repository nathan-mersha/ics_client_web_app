import logo from '../rsr/img/logo.png'
import icsSS from '../rsr/img/ics_ss.png'
const Login = () => {
    return (


        <div className=" mx-auto h-screen w-full bg-gray-300 py-8">

            <div className="container flex justify-center mx-auto h-full bg-gray-300">


                <div className="bg-white container mx-10 md:mx-auto  flex-1 flex justify-around items-center  md:rounded-l-xl shadow-lg flex-col " >

                    <img className='h-24' src={logo}></img>

                    <form className=''>
                        <h2 className='text-center text-gray-500 text-lg font-bold'>Login To Wallet</h2>
                        <div className='py-5 '></div>
                        <label className='text-gray-400 text-xs'>Phone Number</label><br />
                        <input className='border-b' type="text" placeholder=""></input><br />
                        <div className='py-2 '></div>
                        <label className='text-gray-400 text-xs'>Password</label><br />
                        <input className='border-b' type="text" placeholder=""></input><br />
                        <div className='py-3'></div>

                        <button type="button" className="bg-black text-white container py-1 rounded shadow-lg font-bold text-sm">Login</button>
                        <div className='py-2'></div>
                        <div className='flex justify-center ' ><h5 className='text-gray-500 text-sm pr-2'>Forgot password ? </h5> <a href="#" className='text-sm'>click here</a></div>
                    </form>
                </div>





                <div className="hidden md:block flex-col flex-1 rounded-r-xl shadow-lg bg-yellow-200 justify-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1605106715994-18d3fecffb98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80')]">

                    <div className='self-center'>
                        <img className='h-72' src={icsSS}></img>
                    </div>

                    <div className=''>
                        <h2 className='text-white text-3xl font-bold text-center'>Convenience</h2>
                        <h4 className='text-white text-center'>Pay directly from your laptop</h4>
                    </div>

                </div>


            </div>

        </div>

    );


}

export default Login