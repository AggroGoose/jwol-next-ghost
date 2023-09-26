import { POLICY_ROUTE } from "@/lib/utils/constants";
import Link from "next/link";

export default async function Policies() {
  return (
    <div className="content-grid flex flex-col gap-6 px-3 lg:px-0 min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 mt-6">
          <div className="text-lg font-bold tracking-wider">
            <Link
              href={"home"}
              className="text-fcolor-link hover:text-hover-link hover:underline"
            >
              Home
            </Link>
            <span className="text-fcolor-base">{` // `}</span>
            <Link
              href={POLICY_ROUTE}
              className="text-fcolor-link hover:text-hover-link hover:underline"
            >
              Policies
            </Link>
          </div>
          <h1>Here Are Our Current Policies:</h1>
        </div>
        <div className="flex flex-col gap-6 px-3 pb-6 xl:px-0 text-head3 font-bold text-fcolor-link ml-8">
          <Link
            href={POLICY_ROUTE + "/cookies"}
            className="hover:text-hover-link hover:underline"
          >
            Cookie Policy
          </Link>
          <Link
            href={POLICY_ROUTE + "/privacy-policy"}
            className="hover:text-hover-link hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href={POLICY_ROUTE + "/disclaimer"}
            className="hover:text-hover-link hover:underline"
          >
            Disclaimer
          </Link>
          <Link
            href={POLICY_ROUTE + "/terms-and-conditions"}
            className="hover:text-hover-link hover:underline"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
