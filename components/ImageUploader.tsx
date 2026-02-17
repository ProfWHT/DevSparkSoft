import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ACCEPTED_FORMATS = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/webp': ['.webp'],
  'image/svg+xml': ['.svg'],
  'image/gif': ['.gif'],
};

const ImageUploader: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    setError(null);
    setPreview(null);
    setFileInfo(null);

    if (fileRejections.length > 0) {
      setError(`অবৈধ ফাইল ফরম্যাট বা সাইজ ${MAX_SIZE_MB}MB এর বেশি।`);
      return;
    }

    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setPreview(URL.createObjectURL(file));
      setFileInfo(`${file.name} - ${(file.size / 1024).toFixed(2)} KB`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FORMATS,
    maxSize: MAX_SIZE_BYTES,
    multiple: false,
  });

  const handleRemove = () => {
    setPreview(null);
    setFileInfo(null);
    setError(null);
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-300 ${
          isDragActive ? 'border-brand-blue bg-brand-blue/10' : 'border-gray-600 hover:border-brand-blue'
        } ${error ? 'border-red-500' : ''}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative group">
            <img src={preview} alt="Preview" className="mx-auto max-h-48 rounded-md" />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold">Click or drag to replace</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-brand-slate">Drag & drop an image here, or click to select</p>
            <p className="text-xs text-gray-500 mt-1">Supports: JPG, PNG, WEBP, SVG, GIF (Max {MAX_SIZE_MB}MB)</p>
          </div>
        )}
      </div>
      
      {fileInfo && !error && <p className="text-xs text-gray-400 mt-2">{fileInfo}</p>}
      
      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}

      {preview && (
        <div className="mt-4 flex gap-4">
          <button className="flex-1 px-4 py-2 bg-brand-blue text-white rounded-md hover:bg-opacity-80 transition-colors">
            Save Image
          </button>
          <button onClick={handleRemove} className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
