import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileSettingForm from "../../../components/Forms/Profile";
import { useRouter } from "next/router";
import { nearStore } from "../../../store/near";
import { initNearConnection } from "../../../lib/auth";

const ProfileSettings: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const state: any = nearStore((state) => state);

  const checkUser = async () => {
    if (state.pnftContract) {
      const isUserRegistered = await state.pnftContract?.has_registered({
        user_id: state.accountId,
      });
      if (isUserRegistered) {
        router.push("/flow")
      }
    }
  }

  useEffect(() => {
    checkUser();
  }, [state.accountId, state.pnftContract]);

  return (
    <div className="w-full h-screen bg-black flex justify-around items-center poppins">
      <div className="w-[45%] h-[max-content] bg-black-dark rounded-[20px] py-[30px] px-[20px] ">
        <div className="w-full flex justify-around">
          <Image src="/assets/images/ae-pass.svg" alt="ae-pass" width={50} height={50} />
        </div>
        <ProfileSettingForm />
      </div>
    </div>
  );
}

export default ProfileSettings;
