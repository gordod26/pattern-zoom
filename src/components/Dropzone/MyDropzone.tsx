import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface IFileWithPreview extends File {
  preview?: string;
}

const MyDropzone: React.FC = () => {
  const [image, setImage] = useState<IFileWithPreview | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      const file = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });

      setImage(file as IFileWithPreview);
    }

    // acceptedFiles.forEach((file: any) => {
    //   const reader = new FileReader();

    //   reader.onabort = () => console.log("file reading was aborted");
    //   reader.onerror = () => console.log("file reading has failed");
    //   reader.onload = () => {
    //     // Do whatever you want with the file contents
    //     const binaryStr = reader.result;
    //     console.log(binaryStr);
    //   };
    //   reader.readAsArrayBuffer(file);
    // });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <section className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <main>
        {image && (
          <div>
            <img
              src={image.preview}
              alt="preview"
              className="object-cover w-full h-64"
            />
          </div>
        )}
      </main>
    </section>
  );
};

export default MyDropzone;
