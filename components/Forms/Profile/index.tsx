import { Textarea } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ProfileSettingForm: React.FC = () => {
    return (
        <div className="px-6">
            <div className="mt-4 flex w-ful gap-6">
                <div className="h-[400px] w-[230px] bg-[#0000004d] p-2" style={{
                    backgroundImage: `url("/assets/images/profile-avatar-cover.svg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    backgroundBlendMode: "overlay",
                }}>
                    <div className="flex flex-col justify-between h-[70%] text-sm pt-4">
                        <div className="flex justify-around">
                            <label className="text-white">Avatar</label>
                        </div>

                        <div className="w-full  flex flex-col justify-around">
                            <Image src="/assets/icons/upload-icon.svg" alt="profile-avatar" width={40} height={40} />
                            <label className="text-white text-center">Upload</label>
                        </div>

                        
                        <div className="w-full  flex flex-col justify-around">
                            <Image src="/assets/icons/3d-account-icon.svg" alt="profile-avatar" width={40} height={40} />
                            <label className="text-white text-center">3D avatar</label>
                        </div>
                    </div>
                </div>
                <div className="w-[55%] ">
                    <input type="text" placeholder="Full name" className="w-full text-sm  py-3 px-4 focus:outline-none bg-black rounded-md" />
                    <input type="text" placeholder="Username" className="mt-[1em] w-full text-sm  py-3 px-4 focus:outline-none bg-black rounded-md" />

                    <Textarea placeholder="About" 
                    style={{
                        border: 0,
                        backgroundColor: 'black',
                        marginTop: '1em',
                        fontSize: '14px'
                    }}
                    rows={14}
                    />
                </div>
            </div>
            <div className="w-full flex justify-around mt-4">
                <button className="text-white bg-purple p-2 rounded-[10px] w-[200px]">
                    Create
                </button>
            </div>
        </div>
    );
}

export default ProfileSettingForm;