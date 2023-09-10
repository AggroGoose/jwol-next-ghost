import { useAuthContext } from "@/lib/context/authContext";
import { SITE_SERVER } from "@/lib/utils/constants";
import { useState } from "react";

type ValidateStatus = "none" | "error" | "success";

export default function ConfirmRegister({
  image,
  username,
  setStep,
  setNewUser,
  userId,
}: {
  image: string;
  username: string;
  setStep: React.Dispatch<1 | 2 | 3>;
  setNewUser: React.Dispatch<boolean>;
  userId: string;
}) {
  const [userStatus, setUserStatus] = useState<ValidateStatus>("none");
  const [feedback, setFeedback] = useState<string>("");

  const { intake } = useAuthContext();

  const giveFeedback = (status: ValidateStatus, message: string) => {
    setUserStatus(status);
    setFeedback(message);
  };

  const handleChangeImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleChangeUsername = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(1);
  };

  const handleComplete = async (e: React.MouseEvent) => {
    e.preventDefault();
    const registerData: GansoUserIntake = {
      id: userId,
      image,
      username,
    };
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({ ...registerData }),
    };
    const res = await fetch(SITE_SERVER + "user/IntakeComplete", requestOptions)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    if (!res) {
      giveFeedback("error", "Something went wrong, please try again.");
      return;
    }
    intake!(username, image);
    setNewUser(false);
  };
  return (
    <>
      <p className="text-center text-lg">
        <b>Step 2/3:</b> Upload a Photo
      </p>

      <p className="text-center text-base">Confirm Details Below:</p>
      <div className="flex flex-col gap-2 items-center">
        <div className="h-24 w-24 relative self-center">
          <img
            src={image}
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        <button
          className="text-sm underline hover:text-primary-500 font-medium"
          onClick={handleChangeImage}
        >
          Change Image
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p>
          <b>Username: </b>
          {username}
        </p>
        <button
          className="text-sm underline hover:text-primary-500 font-medium"
          onClick={handleChangeUsername}
        >
          Change Username
        </button>
      </div>

      {userStatus !== "none" && (
        <p
          className={`text-sm font-bold italic mt-1 text-center ${
            userStatus === "error" ? "text-accent-400" : "text-primary-500"
          }`}
        >
          {feedback}
        </p>
      )}
      <button
        className={`w-48 text-sm font-medium bg-primary-500 rounded-lg text-always-light leading-none px-4 py-2.5 duration-300 transition-colors hover:bg-accent self-center`}
        onClick={handleComplete}
      >
        Confirm
      </button>
    </>
  );
}
