import noImage from "../assets/noimage.webp";

const getCroppedImageUrl = (url : string) => {
    if(!url) return noImage;
  const index = url.indexOf("media/")+6;
  return url.slice(0,index) + "crop/600/400/" + url.slice(index);
}
export default getCroppedImageUrl