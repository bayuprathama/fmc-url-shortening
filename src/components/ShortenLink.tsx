import clsx from 'clsx'
import { SetStateAction, useRef, useState } from 'react'
import { ShortenURL } from '../App'

type ShortenLinkProps = {
  url: ShortenURL
  setIsActive: React.Dispatch<SetStateAction<string>>
  isActive: boolean
}
function ShortenLink({ url, isActive, setIsActive }: ShortenLinkProps) {
  function handleCopyClick() {
    setIsActive(url.shortenURL)
    navigator.clipboard.writeText(shortenURLRef.current?.dataset.copy as string)
  }
  const shortenURLRef = useRef<HTMLAnchorElement>(null)
  return (
    <div className="bg-white flex lg:items-center flex-col lg:flex-row lg:justify-between rounded-md lg:py-4 lg:px-6">
      <div className="flex lg:justify-between lg:flex-1 border-b lg:border-none py-3 px-4 lg:py-0 lg:px-0">
        <a
          target="_blank"
          href={url.originalURL}
          className="lg:text-xl text-ellipsis overflow-hidden truncate max-w-[500px]"
        >
          {url.originalURL}
        </a>
      </div>
      <div className="px-4 pb-4 lg:px-0 lg:pb-0 flex flex-col lg:flex-row lg:gap-6 lg:items-center">
        <a
          className="text-cyan lg:text-xl py-3"
          ref={shortenURLRef}
          data-copy={url.shortenURL}
          href={url.shortenURL}
          target="_blank"
        >
          {url.shortenURL}
        </a>
        <button
          onClick={handleCopyClick}
          className={clsx(
            isActive ? 'bg-dark-violet' : 'bg-cyan',
            'py-3 px-10 font-bold transition ease-in-out duration-300 rounded-md inline-block text-center text-gray-50'
          )}
        >
          {isActive ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
export default ShortenLink
