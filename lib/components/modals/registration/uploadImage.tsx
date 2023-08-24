import { storage } from "@/lib/api/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

type ValidateStatus = "none" | "error" | "success";

export default function UploadImage({
  image,
  setImage,
  setStep,
  userId,
}: {
  image: string;
  setImage: React.Dispatch<string>;
  setStep: React.Dispatch<1 | 2 | 3>;
  userId: string;
}) {
  const [userStatus, setUserStatus] = useState<ValidateStatus>("none");
  const [feedback, setFeedback] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const giveFeedback = (status: ValidateStatus, message: string) => {
    setUserStatus(status);
    setFeedback(message);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFile = e.target.files[0];
    const allowed = ["image/jpeg", "image/png", "image/gif"];
    if (!allowed.includes(selectedFile.type)) {
      giveFeedback("error", "File must be either jpg, png, or gif format.");
      return;
    }
    if (selectedFile.size > 3000000) {
      giveFeedback("error", "Please select a file less than 3mb.");
      return;
    }
    setFile(selectedFile);
  };

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!file) {
      setStep(3);
      return;
    }
    const storageRef = ref(storage, `users/${userId}/profile.png`);
    const result = await uploadBytes(storageRef, file).catch((err) => {
      console.error(err);
    });
    if (!result) {
      giveFeedback("error", "Error uploading file, please try again.");
      return;
    }
    const url = await getDownloadURL(result.ref).catch((err) => {
      console.error(err);
    });
    if (!url) {
      giveFeedback("error", "Error generating url, please try again.");
      return;
    }
    setImage(url);
    setStep(3);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(1);
  };
  return (
    <>
      <p className="text-center text-lg">
        <b>Step 2/3:</b> Upload a Photo
      </p>
      <div className="h-24 w-24 relative self-center">
        <img
          src={file ? URL.createObjectURL(file) : image}
          className="object-cover rounded-full w-full h-full"
        />
      </div>
      <p className="text-center text-base">
        Upload an avatar below or click continue to use the current.
      </p>
      <fieldset className="w-full space-y-1">
        <label htmlFor="files" className="block text-xs font-medium">
          Image
        </label>
        <div className="flex">
          <input
            type="file"
            name="files"
            id="files"
            onChange={handleFileChange}
            className="px-4 py-6 border-2 border-dashed rounded-md file:rounded-xl file:mr-3 file:bg-secondary file:border-none file:leading-none file:p-2.5 file:hover:bg-accent cursor-pointer"
            accept="image/png, image/jpeg, image/gif"
          />
        </div>
      </fieldset>
      {userStatus !== "none" && (
        <p
          className={`text-sm font-bold italic mt-1 text-center ${
            userStatus === "error" ? "text-primary" : "text-secondary"
          }`}
        >
          {feedback}
        </p>
      )}
      <div className="mt-4 flex flex-col gap-y-4 items-center md:flex-row md:justify-between">
        <button
          className="w-44 text-sm font-medium bg-secondary rounded-lg hover:bg-primary text-base-100 leading-none px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={handleBack}
        >
          Change Username
        </button>
        <button
          className={`w-44 text-sm font-medium bg-transparent rounded-lg hover:text-base-100 border-solid border-2 leading-none px-4 py-2.5 duration-300 transition-colors text-secondary border-secondary hover:bg-secondary`}
          onClick={handleNext}
        >
          Final Step
        </button>
      </div>
    </>
  );
}
