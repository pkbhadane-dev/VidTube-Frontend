import { useToggleStore } from "@/store/useToggleStore";




export const ProgressBar = () => {
    const { uploadProgress, isUploading } = useToggleStore();
    console.log(isUploading);
    
  return (
    <>
       
       {isUploading && (<div className="w-full h-1 bg-gray-800 z-50">
          <div
            className="bg-green-500 h-full transition-all duration-200"
            style={{ width: `${uploadProgress}%` }}
          />
          <p className="text-white text-xs text-center">
            Uploading: {uploadProgress}%
          </p>
        </div>)}
      
    </>
  );
};
