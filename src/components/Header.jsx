import logo from '../assets/images/chef-claude-icon.png'

const Header = () => {
  return (
  <header className='flex justify-center items-center gap-8 p-4 bg-white rounded-t-xl shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)]'>
    <img className='md:w-[70px] w-8' src={logo} alt="logo chef" />
    <h1 className='md:text-6xl text-2xl font-medium'>Chef Claude</h1>
  </header>
  )
}

export default Header