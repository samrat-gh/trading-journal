"use client";

import { useState } from "react";
import FileUpload from "./components/file-upload";

export default function Portfolio() {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (files.length !== 2) return;

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();

      console.log(formData);
      console.log(files);
      // send both files
      files.forEach((file) => {
        console.log("Appending file:", file.name);
        formData.append("files", file);
      });

      console.log(formData);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Upload failed");
      }

      const data = await res.json();
      console.log("Upload success:", data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center border-rounded bg-slate-50 p-6">
      <h1 className="mx-auto w-[50vw] text-center font-semibold text-base text-green-800">
        Upload your transaction files here. Supported formats: Meroshare CSV,
        TMS Excel. We will automatically parse and import your transactions into
        the journal.
      </h1>

      <div className="mx-auto flex h-full w-[50vw] flex-row items-center justify-center gap-6 p-8">
        <FileUpload files={files} setFiles={setFiles} type="meroshare" />
        <FileUpload files={files} setFiles={setFiles} type="tms" />
      </div>

      {error ? <p className="text-red-600 text-sm">{error}</p> : null}

      <button
        type="button"
        onClick={handleUpload}
        disabled={files.length !== 2 || isUploading}
        className="mx-auto cursor-pointer rounded-2xl bg-green-500 px-9 py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
