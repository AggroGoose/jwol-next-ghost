import { SITE_SERVER } from "@/lib/utils/constants";
import { useRef, useState } from "react";

type ValidateStatus = "none" | "error" | "success";

export default function SetUsername({
  username,
  setUsername,
  setStep,
}: {
  username: string | null;
  setUsername: React.Dispatch<string | null>;
  setStep: React.Dispatch<1 | 2 | 3>;
}) {
  const [userStatus, setUserStatus] = useState<ValidateStatus>("none");
  const [feedback, setFeedback] = useState<string>("");
  const userInput = useRef<HTMLInputElement>(null);

  const giveFeedback = (status: ValidateStatus, message: string) => {
    setUserStatus(status);
    setFeedback(message);
  };

  const handleCheck = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!userInput.current?.value) {
      giveFeedback("error", "Please enter a username.");
      return;
    }
    const checkName = userInput.current.value.trim();
    if (checkName.length < 5 || checkName.length > 15) {
      giveFeedback("error", "Username must be between 5 and 15 characters");
      return;
    }
    if (!/^[a-zA-Z0-9-_\.]+$/.test(checkName)) {
      giveFeedback(
        "error",
        "Must use letters, numbers, dashes, dots, and underscores only."
      );
      return;
    }

    const response: { isUsed: boolean } = await fetch(
      SITE_SERVER + "user/CheckUsername/" + checkName
    ).then((response) => response.json());

    if (response.isUsed) {
      giveFeedback("error", "Username is not available.");
      return;
    }

    giveFeedback("success", "Username is available!");
    setUsername(checkName);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!username) {
      giveFeedback(
        "error",
        "No username set, click 'Check Username' to verify username before continuing."
      );
      return;
    }
    setStep(2);
  };
  return (
    <>
      <p className="text-center text-lg">
        <b>Step 1/3:</b> Choose a Username
      </p>
      <p className="text-center text-base">
        Please select a username between 5-15 characters. Alphanumeric
        characters, dashes, dots, and underlines only.
      </p>
      <p className="text-center text-base">
        <b>Currently Set: </b>
        {username ? username : "None"}
      </p>
      <form>
        <label
          className="block text-xs font-medium text-gray-600"
          htmlFor="LoggingUsername"
        >
          Enter Username
        </label>
        <input
          ref={userInput}
          id="LoggingUsername"
          className="block w-full px-4 py-2 text-neutral bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 leading-none"
          type="text"
        />
        {userStatus !== "none" && (
          <p
            className={`text-xs font-bold italic mt-1 text-center ${
              userStatus === "error" ? "text-primary" : "text-secondary"
            }`}
          >
            {feedback}
          </p>
        )}
        <div className="mt-4 flex flex-col gap-y-4 items-center md:flex-row md:justify-between">
          <button
            className="w-44 text-sm font-medium bg-secondary rounded-lg hover:bg-primary text-base-100 leading-none px-4 py-2.5 duration-300 transition-colors focus:outline-none"
            onClick={handleCheck}
          >
            Check Username
          </button>
          <button
            className={`w-44 text-sm font-medium bg-transparent rounded-lg hover:text-base-100 border-solid border-2 leading-none px-4 py-2.5 duration-300 transition-colors ${
              username
                ? "text-secondary border-secondary hover:bg-secondary"
                : "text-gray-700 border-gray-700 hover:bg-gray-700"
            }`}
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}
