import { CardData } from '../card'

function Card({ title, description, imgUrl }: CardData) {
  return (
    <div className="bg-white text-center lg:text-left relative px-8 pb-10 rounded-md">
      <div
        className={`w-[85px] absolute mx-auto left-0 right-0 aspect-square rounded-full bg-dark-violet ${imgUrl} bg-no-repeat bg-center -translate-y-1/2 lg:left-8 lg:right-auto lg:mx-0`}
      ></div>
      <h3 className="text-dark-violet font-bold text-xl mb-4 pt-20">{title}</h3>
      <p className="text-grayish-violet text-sm">{description}</p>
    </div>
  )
}
export default Card
