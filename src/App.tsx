import React, { SetStateAction, useState } from 'react'
import Card from './components/Card'
import Footer from './components/Footer'
import Nav from './components/Nav'
import LinkShorteningBar from './components/LinkShorteningBar'
import { cardData } from './card'
import ShortenLink from './components/ShortenLink'

export type ShortenURL = {
  originalURL: string
  shortenURL: string
}
function App() {
  const [navToggle, setNavToggle] = useState(false)
  const [urlValue, setUrlValue] = useState<string | null>('')
  // const [url, setUrl] = useState<ShortenURL[]>([])
  const [url, setUrl] = useState<ShortenURL[]>([])
  const [isLoading, setLoading] = useState(false)
  function handleNavClick() {
    setNavToggle((prev) => !prev)
  }
  async function getShortenURL(url: string) {
    setLoading(true)
    const API_URL = `https://api.shrtco.de/v2/shorten?url=${url}`
    const res = await fetch(API_URL)
    const data = await res.json()
    setUrl((prev) => [
      ...prev,
      {
        originalURL: data.result.original_link,
        shortenURL: data.result.full_short_link,
      },
    ])
    setUrlValue('')
    setLoading(false)
  }
  return (
    <div className="text-semixl font-poppins bg-[#f0f1f6]">
      <Nav handleNavClick={handleNavClick} navToggle={navToggle} />
      {/* Hero section */}
      <div className=" bg-white">
        <div className="flex flex-col lg:flex-row mx-auto relative">
          <div className="max-w-1110 mx-auto flex flex-col items-center lg:items-start lg:flex-1 pt-20 pb-56 px-6 lg:px-0">
            <h1 className="lg:text-7xl text-[2.5rem] font-bold max-w-[600px] leading-[1.15] text-center lg:text-left mb-2 lg:leading-[1.2]">
              More than just shorter links
            </h1>
            <p className="lg:text-xl text-lg max-w-[500px] mb-10 leading-relaxed text-grayish-violet text-center lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <a
              href="#"
              className="py-3 px-10 font-bold bg-cyan rounded-full inline-block text-center text-gray-50"
            >
              Get Started
            </a>
          </div>
          <div className="lg:absolute  -order-1 lg:order-none lg:flex-1 lg:right-0 bg-illustration bg-cover bg-no-repeat h-[330px] ml-6 lg:ml-0 lg:h-[475px] lg:w-[600px]"></div>
        </div>
      </div>

      {/* main content */}
      <main className="px-6 max-w-1110 lg:px-0 mx-auto">
        <LinkShorteningBar
          setUrlValue={setUrlValue}
          urlValue={urlValue}
          getShortenURL={getShortenURL}
          isLoading={isLoading}
        />
        {url && (
          <div className="flex flex-col gap-6">
            {url
              .slice(-3)
              .reverse()
              .map((data, idx) => (
                <ShortenLink url={data} key={data.shortenURL} />
              ))}
          </div>
        )}
        <div className="max-w-[520px] text-center mx-auto my-28">
          <h2 className="font-bold text-[2.5rem]">Advanced Statistics</h2>
          <p className="text-grayish-violet">
            Track how your links are performing across the web with our advanced
            statistics dashbboard.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[5.625rem] lg:gap-8 pb-20 lg:pb-28">
          {cardData.map((data) => (
            <Card
              title={data.title}
              description={data.description}
              imgUrl={data.imgUrl}
              key={data.title}
            />
          ))}
        </div>
      </main>
      <section className="flex justify-center flex-col items-center gap-6 bg-boost-mobile lg:bg-boost-desktop bg-dark-violet bg-no-repeat py-16 bg-cover">
        <h2 className="lg:text-[2.5rem] text-[1.75rem] font-bold text-gray-50">
          Boost your links today
        </h2>
        <a
          href="#"
          className="py-3 px-10 font-bold bg-cyan rounded-full inline-block text-center text-gray-50"
        >
          Get Started
        </a>
      </section>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default App
