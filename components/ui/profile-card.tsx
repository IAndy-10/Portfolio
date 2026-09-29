import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="w-48 h-64 flex flex-col items-center mx-auto">
      <div className="w-48 h-48 mb-4 crop-circle">
        <Image
          src="/profile-photo.png"
          alt="Italo Rojas"
          fill
          className="crop-img scale-115 object-cover object-[50%_50%]"
        />
      </div>
      <h2 className="text-2xl font-bold text-primary mb-1">Italo Rojas</h2>
      <p className="text-secondary uppercase tracking-wide">Art | Engineering</p>
    </div>
  );
};

export default ProfileCard;
