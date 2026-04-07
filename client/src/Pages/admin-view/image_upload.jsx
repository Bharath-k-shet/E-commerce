// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { useEffect, useRef } from "react"
// import { CloudUpload, File, X } from "lucide-react"
// import axios from "axios";
// import { Skeleton } from "@/components/ui/skeleton";

// function ProductImageUpload({
//   isEditMode,
//   setImageLoadingState,
//   imageLoadingState,
//   imageFile,
//   setImageFile,
//   setUploadImageUrl,
//   isCustomStyling = false
// }) {

//   const inputRef = useRef(null);

//   function handleImageFileChange(event) {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) setImageFile(selectedFile);
//   }

//   function handleDragOver(event) {
//     event.preventDefault();
//   }

//   function handleDrop(event) {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files?.[0];
//     if (droppedFile) setImageFile(droppedFile);
//   }

//   function handleRemoveImage() {
//     setImageFile(null);
//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   }

//   const uploadImageToCloudinary = async () => {
//     try {
//       setImageLoadingState(true);

//       const data = new FormData();
//       data.append('my_file', imageFile);

//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/admin/products/upload-image`,
//         data
//       );

//       if (response?.data?.success) {
//         // ✅ FIXED HERE (VERY IMPORTANT)
//         setUploadImageUrl(response.data.result.secure_url);
//       }

//     } catch (error) {
//       console.log("Upload Error:", error);
//     } finally {
//       setImageLoadingState(false);
//     }
//   }

//   useEffect(() => {
//     if (imageFile !== null) uploadImageToCloudinary();
//   }, [imageFile]);

//   return (
//     <div className={`w-full ${isCustomStyling ? "" : 'max-w-md mx-auto'}`}>
      
//       <Label className="text-lg font-semibold mb-2 block">
//         Upload Image
//       </Label>

//       <div
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         className={`${isEditMode ? "opacity-60" : ""} border-2 border-dashed rounded-lg p-4`}
//       >

//         <Input
//           disabled={isEditMode}
//           type="file"
//           id="image-upload"
//           className="hidden"
//           ref={inputRef}
//           onChange={handleImageFileChange}
//         />

//         {
//           !imageFile ? (
//             <Label
//               htmlFor="image-upload"
//               className={`${isEditMode ? "cursor-not-allowed" : ""} flex flex-col items-center justify-center h-32 cursor-pointer`}
//             >
//               <CloudUpload className="w-10 h-10 text-muted-foreground mb-2" />
//               <span>Drag & drop or click to upload image</span>
//             </Label>

//           ) : (
//             imageLoadingState ? (
//               <Skeleton className="h-32 bg-gray-100" />
//             ) : (
//               <div className="flex flex-col items-center justify-center gap-3">

//                 {/* ✅ IMAGE PREVIEW ADDED */}
//                 <img
//                   src={URL.createObjectURL(imageFile)}
//                   alt="preview"
//                   className="h-32 object-cover rounded-md"
//                 />

//                 <p className="text-sm">{imageFile.name}</p>

//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-muted-foreground hover:text-foreground"
//                   onClick={handleRemoveImage}
//                 >
//                   <X className="w-4 h-4" />
//                 </Button>

//               </div>
//             )
//           )
//         }

//       </div>
//     </div>
//   );
// }

// export default ProductImageUpload;



// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label";
// // import { Button } from "@/components/ui/button";
// // import { useEffect, useRef } from "react"
// // import { CloudUpload, File, X } from "lucide-react"
// // import axios from "axios";
// // import { Skeleton } from "@/components/ui/skeleton";


// // function ProductImageUpload({
// //   isEditMode, 
// //   setImageLoadingState,
// //   imageLoadingState,
// //   imageFile,
// //   setImageFile,
// //   setUploadImageUrl,
// //   isCustomStyling = false }) {

// //   const inputRef = useRef(null);

// //   function handleImageFileChange(event) {
// //     console.log(event.target.files)
// //     const selectedFile = event.target.files?.[0];
// //     console.log(selectedFile)
// //     if (selectedFile) setImageFile(selectedFile);
// //   }

// //   function handleDragOver(event) {
// //     event.preventDefault()
// //   }

// //   function handleDrop(event) {
// //     event.preventDefault()
// //     const droppedFile = event.dataTransfer.files?.[0];
// //     if (droppedFile) setImageFile(droppedFile)
// //   }

// //   function handleRemoveImage() {
// //     setImageFile(null)
// //     if (inputRef.current) {
// //       inputRef.current.value = ""
// //     }
// //   }

// //   console.log(imageFile);

// //   const uploadImageToCloudinary = async () => {
// //     setImageLoadingState(true)
// //     const data = new FormData(); 
// //     data.append('my_file', imageFile)
// //     const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/products/upload-image`, data)
// //     if (response?.data?.success) {
// //       setUploadImageUrl(response.data.result.url);
// //       setImageLoadingState(false); 
// //     }

// //   }

// //   useEffect(() => {
// //     if (imageFile !== null) uploadImageToCloudinary()
// //   }, [imageFile])

// //   return (
// //     <div className={`w-full ${isCustomStyling ? "" : 'max-w-md mx-auto'}`}>
// //       <Label className="text-lg font-semibold mb-2 block">
// //         upload Image
// //       </Label>
// //       <div onDragOver={handleDragOver} onDrop={handleDrop} className={`${isEditMode ? "opacity-60" : ""} border-2 border-dashed rounded-lg p-4 `}>
// //         <Input disabled={isEditMode} type="file" id="image-upload" className="hidden" ref={inputRef} onChange={handleImageFileChange} />
// //         {
// //           !imageFile ?
// //             <Label htmlFor="image-upload" className={`${isEditMode ? "cursor-not-allowed" : ""} flex flex-col items-center justify-center h-32 cursor-pointer`}>
// //               <CloudUpload className="w-10 h-10 text-muted-foreground mb-2" />
// //               <span>drag and drop or click to upload image</span>
// //             </Label> : (
// //               imageLoadingState ?
// //                 <Skeleton className="h-10 bg-gray-100" /> :
// //                 <div className="flex items-center justify-center">
// //                   <div className="flex items-center">
// //                     <File className="w-8 h-8 text-primary mr-2" />
// //                   </div>
// //                   <p className="text-sm">
// //                     {imageFile.name}
// //                   </p>
// //                   <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}>
// //                     <X className="w-4 h-4" />
// //                     <span className="sr-only">Remove File</span>
// //                   </Button>
// //                 </div>)
// //         }
// //       </div>
// //     </div>
// //   )
// // }

// // export default ProductImageUpload

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react"
import { CloudUpload, X } from "lucide-react"
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

function ProductImageUpload({
  isEditMode,
  setImageLoadingState,
  imageLoadingState,
  imageFile,
  setImageFile,
  setUploadImageUrl,
}) {

  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    const file = event.target.files?.[0];
    if (file) setImageFile(file);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  // ✅ MAIN FUNCTION
  const uploadImageToCloudinary = async () => {
    try {
      setImageLoadingState(true);

      const data = new FormData();
      data.append("my_file", imageFile);

      const response = await axios.post(
        "http://localhost:5000/api/admin/products/upload-image",
        data
      );

      console.log("FULL RESPONSE:", response.data);
      console.log("IMAGE URL:", response.data.result.secure_url);

      if (response?.data?.success) {
        setUploadImageUrl(response.data.result.secure_url);
      }

    } catch (error) {
      console.log("UPLOAD ERROR:", error);
    } finally {
      setImageLoadingState(false);
    }
  };

  useEffect(() => {
    if (imageFile) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto">

      <Label className="text-lg font-semibold mb-2 block">
        Upload Image
      </Label>

      <div className="border-2 border-dashed rounded-lg p-4">

        <Input
          type="file"
          id="image-upload"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />

        {!imageFile ? (
          <Label htmlFor="image-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
            <CloudUpload className="w-10 h-10 mb-2" />
            <span>Click to upload</span>
          </Label>

        ) : (
          imageLoadingState ? (
            <Skeleton className="h-32" />
          ) : (
            <div className="flex flex-col items-center gap-3">

              <img
                src={URL.createObjectURL(imageFile)}
                className="h-32 rounded"
              />

              <Button onClick={handleRemoveImage}>
                <X />
              </Button>

            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;