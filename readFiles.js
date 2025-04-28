// get-images.js
import fs from "fs";

const folderPath = "./public/images"; // your folder with images

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  const imageFiles = files.filter((file) =>
    ["jpg", "jpeg", "png", "gif", "webp"].some((ext) => file.endsWith(ext))
  );

  console.log("Images:");
  console.log(imageFiles);
});
