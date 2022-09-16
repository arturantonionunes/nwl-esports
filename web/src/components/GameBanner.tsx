interface GameBannerProps{
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export const GameBanner = (props: GameBannerProps) => {
  return (
    <a
      href="#"
      className="relative rounded-lg overflow-hidden"
      target="_blank"
      rel="noreferrer"
    >

      <img src={props.bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">
          {props.title}
         </strong>
        <span className="text-zinc-300 text-sm block">
         {props.adsCount > 1 ?  `${props.adsCount} Anúncios` : `${props.adsCount} Anúncio ` }
        </span>
      </div>
    </a>
  )
}
