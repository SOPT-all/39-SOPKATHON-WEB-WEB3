interface ImageViewProps {
  src?: string;
  alt?: string;
}

const ImageView = ({ src, alt = '' }: ImageViewProps) => {
  return (
    <div className="size-80 overflow-hidden bg-[#d9d9d9]">
      {src && <img src={src} alt={alt} className="size-full object-cover" />}
    </div>
  );
};

export default ImageView;