import Logo from '../assets/logo.png'
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

const Navbar = ({coin}:{coin : number}) => {
    
    return (
        <div className='bg-amber-100'>
            <div className='flex justify-between container mx-auto'>
            <img src={Logo} alt="" />
            <ul className='flex gap-4 items-center'>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Fixture</li>
                <li><a href=""></a>Teams</li>
                <li><a href=""></a>Schedules</li>
            </ul>
            <h2 className='font-bold text-2xl text-black flex gap-1 items-center'>{coin} Coin <HiOutlineCurrencyDollar /></h2>
            </div>
        </div>
    );
};

export default Navbar;