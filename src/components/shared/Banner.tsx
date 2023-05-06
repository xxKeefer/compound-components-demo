type Props = {
  image: string;
  bgImage: string;
};

export const Banner = ({ bgImage, image }: Props) => {
  return (
    <div className="relative mb-[100px] h-36 w-full">
      <img
        className="h-full w-full object-cover"
        src={bgImage}
        alt="background image"
      />
      <img
        className="absolute left-1/4 top-1/4 h-[200px] rounded-full bg-slate-50 ring-8 ring-slate-50 ring-offset-slate-50"
        src={image}
        alt="profile picture"
      />
    </div>
  );
};
