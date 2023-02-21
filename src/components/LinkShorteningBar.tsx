import clsx from 'clsx'
import React, {
  SetStateAction,
  Dispatch,
  useState,
  useRef,
  useEffect,
} from 'react'
type LinkShorteningBarProps = {
  setUrlValue: Dispatch<SetStateAction<string | null>>
  urlValue: string | null
  getShortenURL: Function
  isLoading: boolean
}
function LinkShorteningBar({
  setUrlValue,
  urlValue,
  getShortenURL,
  isLoading,
}: LinkShorteningBarProps) {
  const [isEmpty, setIsEmpty] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  function handleShortenClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (urlValue === '') {
      setIsEmpty(true)
      inputRef?.current?.focus()
      return
    }

    // API CALL goes here
    getShortenURL(urlValue)
  }
  useEffect(() => {
    if (urlValue?.length !== 0) {
      setIsEmpty(false)
    }
  }, [isEmpty, urlValue])

  return (
    <div className="lg:-mb-10 -mb-14 lg:bg-shorten-desktop bg-shorten-mobile bg-auto bg-right-top lg:bg-center lg:bg-cover bg-no-repeat bg-dark-violet rounded-lg -translate-y-1/2 p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:py-2 lg:px-4">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            onChange={(e) => setUrlValue(e.target.value)}
            value={urlValue as string}
            type="text"
            className={clsx(
              `rounded-md  p-4 w-full ${
                isEmpty ? 'placeholder:text-red outline-red mb-6 lg:mb-0' : ''
              }`
            )}
            placeholder="Shorten a link here..."
          />
          {isEmpty && (
            <p className="text-red absolute bottom-1 translate-y-1/2 lg:-bottom-5 italic text-base">
              Please add a link
            </p>
          )}
        </div>
        <button
          onClick={(e) => handleShortenClick(e)}
          className={clsx(
            isLoading ? 'text-dark-violet' : '',
            'p-4 bg-cyan text-gray-50 rounded-md font-bold lg:min-w-max lg:px-8'
          )}
        >
          {isLoading ? 'Working..' : 'Shorten It!'}
        </button>
      </div>
    </div>
  )
}
export default LinkShorteningBar
