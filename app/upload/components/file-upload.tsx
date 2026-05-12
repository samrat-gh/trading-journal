"use client";

import { Button } from "@/components/ui/button";
import { File, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

interface FileUploadProps {
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  files: File[];
  accept?: string;
  type: "meroshare" | "tms";
  multiple?: boolean;
  onFilesSelected?: (files: File[]) => void;
  maxSize?: number; // in bytes
}

const FileUpload = ({
  setFiles,
  files,
  type,
  accept = "*",
  multiple = true,
  onFilesSelected,
  maxSize,
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };

  const processFiles = (newFiles: File[]) => {
    let filesToAdd = multiple ? newFiles : [newFiles[0]];

    if (maxSize) {
      filesToAdd = filesToAdd.filter((file) => file.size <= maxSize);
    }

    if (!multiple) {
      setFiles(filesToAdd);
    } else {
      setFiles((prev) => [...prev, ...filesToAdd]);
    }

    onFilesSelected?.(filesToAdd);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / k ** i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="w-full space-y-4">
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
        />

        <Upload className="mx-auto h-8 w-8 text-gray-400" />
        <p className="mt-2 font-medium text-gray-700 text-sm dark:text-gray-300">
          Drag and drop files here
        </p>
        <p className="text-gray-500 text-xs">or</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          className="mt-2"
        >
          Browse Files
        </Button>
        <div className="mt-2 font-medium text-[14px] text-gray-800 dark:text-gray-200">
          {type === "meroshare"
            ? "Meroshare > My Transaction History > CSV (Transaction History.csv)"
            : "TMS > Trademanagement > Trade Book History (Trade Book Details.xlsx)"}
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="font-medium text-gray-700 text-sm dark:text-gray-300">
            Selected Files ({files.length})
          </p>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-gray-400" />
                  <div className="text-left">
                    <p className="font-medium text-gray-900 text-sm dark:text-gray-100">
                      {file.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
