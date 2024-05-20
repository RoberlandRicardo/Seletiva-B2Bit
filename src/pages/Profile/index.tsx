import Input from "../../components/Input";
import NavBar from "../../components/Navbar";
import useProfileViewModel from "./view.model";


function Profile() {

    const {profile} = useProfileViewModel();

    return (
        <main className="flex justify-center items-center bg-[#F1F5F9] w-percentage/100 h-percentage/100">
            <NavBar />
            {profile && <div className="
                flex
                flex-col
                items-center 
                justify-center 
                w-[25%]
                p-[30px]
                drop-shadow-cardProfile
                rounded-[16px]
                bg-[#FDFDFD]
            ">
                <h4 className="mb-[9px]" >
                    Profile Picture
                </h4>
                <img className="mb-[30px]" src={profile.avatar.medium} />
                <Input 
                    className="mb-[20px]"
                    labelRegular="Your "
                    labelText="Name"
                    value={profile.name}
                    disabled
                    />
                <Input
                    labelRegular="Your "
                    labelText="E-mail" 
                    value={profile.email}
                    disabled
                    />
            </div>}
        </main>
    )
}

export default Profile;