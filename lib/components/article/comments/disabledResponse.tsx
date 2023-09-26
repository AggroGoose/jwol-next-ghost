import { useModalContext } from "@/lib/context/modalContext";

export default function DisabledResponse() {
  const { openSignIn } = useModalContext()!;
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
            className="rounded bg-indigo-600 px-3 py-2 text-xs leading-none font-medium text-white hover:bg-indigo-700"
            onClick={openSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
