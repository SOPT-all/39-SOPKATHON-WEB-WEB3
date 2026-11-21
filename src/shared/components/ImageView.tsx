interface ImageViewProps {
  src?: string;
  alt?: string;
}

const ImageView = ({ src, alt = '' }: ImageViewProps) => {
  return (
    <div
      className={`flex aspect-square w-full items-center justify-center overflow-hidden ${src ? '' : 'bg-gray-200'}`}
    >
      {src && <img src={src} alt={alt} className="size-full object-contain" />}
    </div>
  );
};

export default ImageView;
