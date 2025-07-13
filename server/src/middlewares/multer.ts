import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;

// Using disk storage instead of memory:
// import multer from "multer";

// const storage = multer.diskStorage({
//     filename: function(_req,file,cb){
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({storage: storage})

// export default upload;
