"use client";

import { useFormStatus } from "react-dom";

export default function DeleteButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="bg-red-500 text-white px-2 py-1 rounded disabled:opacity-50"
            disabled={pending}
        >
            {pending ? "Deleting..." : "Delete"}
        </button>
    );
}
