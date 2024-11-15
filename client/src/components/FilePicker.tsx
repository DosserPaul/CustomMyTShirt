import {CustomButton} from "./index.ts";

interface IFilePickerProps {
  file: File | null;
  setFile: (file: string | null) => void;
  readFile: (type: string) => void;
}

const FilePicker = ({file, setFile, readFile}: IFilePickerProps) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">Upload file</label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {!file ? 'No file selected' : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="filled"
          title="Logo"
          onClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="outline"
          title="Full"
          onClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker;
