import { SITE_URI } from "@/lib/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DisabledResponse() {
  const path = usePathname();
  return (
    <div>
      <label htmlFor="ResponseBox" className="sr-only">
        Add Your Thoughts
      </label>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 font-semibold">
        <textarea
          id="ResponseBox"
          className="w-full resize-none border-none align-top focus:ring-0 bg-slate-200"
          rows={2}
          defaultValue={"Please sign in to leave a comment."}
          disabled={true}
        />

        <div className="flex items-center justify-end gap-2 bg-slate-200 p-3">
          <button
            type="button"
            className="rounded bg-primary-500 px-3 py-2 text-sm leading-none tracking-wide text-always-light hover:bg-primary-300"
          >
            <Link href={`/api/auth/signin?callbackUrl=${SITE_URI + path}`}>
              Sign In
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
