import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface IFileWithPreview extends File {
  preview?: string;
}

interface Props {
  zoom: number;
}

const MyDropzone = ({ zoom }: Props) => {
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
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div>
        {image && (
          <div
            className={` h-screen bg-repeat rounded-lg bg-top-left`}
            //add options like bg-repeat-y bg-repeat-x bg-cover bg-center
            style={{
              backgroundImage: `url(${image.preview})`,
              backgroundSize: `${zoom}px`,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default MyDropzone;
