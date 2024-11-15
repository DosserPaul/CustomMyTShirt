
import CustomButton from './CustomButton';

interface AIPickerProps {
  prompt: string;
  setPrompt: (value: string) => void;
  generatingImg: boolean;
  handleSubmit: (type: "logo" | "full") => void;
}

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }: AIPickerProps) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              onClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              onClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
