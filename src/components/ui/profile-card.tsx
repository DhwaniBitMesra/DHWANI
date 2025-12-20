import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  handle?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image, handle }) => {
  return (
    <>
      <style>
        {`
          .hover-scale {
            transition: transform 700ms ease-out;
          }
          .hover-scale:hover {
            transform: scale(1.02);
          }
          .image-scale {
            transition: transform 700ms ease-out;
          }
          .image-container:hover .image-scale {
            transform: scale(1.03);
          }
          .hover-translate {
            transition: transform 500ms ease-out;
          }
          .hover-translate:hover {
            transform: translateX(4px);
          }
          .hover-scale-sm {
            transition: transform 500ms ease-out;
          }
          .hover-scale-sm:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg dark:shadow-2xl dark:shadow-black/80 overflow-hidden hover-scale mx-4 border border-gray-200 dark:border-zinc-800">
            <div className="relative overflow-hidden image-container aspect-[4/5]">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover image-scale"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-2xl font-bold text-white drop-shadow-md">{name}</h2>
                <p className="text-white/80 text-sm font-medium">{role}</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden hover-scale-sm ring-2 ring-gray-200 dark:ring-zinc-700 relative">
                  <Image
                    src={image}
                    alt="Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hover-translate">
                  <div className="text-sm font-semibold text-gray-700 dark:text-zinc-200">{handle || `@${name.toLowerCase().replace(' ', '')}`}</div>
                  <div className="text-xs text-green-500 dark:text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Active Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};