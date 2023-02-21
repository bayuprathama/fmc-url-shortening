import { CardData } from '../card'

function Card({ title, description, imgUrl }: CardData) {
  return (
    <div className="benefit lg:w-[350px] bg-white text-center lg:text-left relative px-8 rounded-md pb-10 lg:pb-0">
      <div
        className={`w-[85px] absolute mx-auto left-0 right-0 aspect-square rounded-full bg-dark-violet ${imgUrl} bg-no-repeat bg-center -translate-y-1/2 lg:left-8 lg:right-auto lg:mx-0`}
      ></div>
      <h3 className="text-dark-violet font-bold text-xl mb-4 pt-[80px]">
        {title}
      </h3>
      <p className="text-grayish-violet text-base lg:text-[15px]">
        {description}
      </p>
    </div>
  )
}
export default Card
