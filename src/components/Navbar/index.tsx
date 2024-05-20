import Button from "../Button";
import useNavBarViewModel from "./view.model";


const NavBar = () => {

    const { executeLogout } = useNavBarViewModel();

    return (
        <nav className="
            flex
            justify-end
            fixed 
            top-0
            w-full
            h-[65px]
            py-[13px]
            px-[43px]
            bg-white
        ">
            <Button 
                text="Logout"
                className="
                    h-full
                "
                onClick={() => executeLogout()}
            />
        </nav>
    )
}

export default NavBar;