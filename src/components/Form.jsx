import React, { useState } from 'react'

const Form = () => {
  const [initialLink, setInititalLink] = useState('') //https://www.frontendMnetor.io
  const [inputError, setInputError] = useState(false)
  const [shortenedLink, setShortenedLnik] = useState('') //https://4wlyz2024
  const [links, setLinks] = useState([])

  const shortenIt = (e) => {
    if(initialLink.trim() === ''){
      e.preventDefault()
      setInputError(true)
      return
    }else{
      setLinks((prevLinks) => {
        if(links.length === 0){
          return 
        }
      })
      setInputError(false)
      setInititalLink('')
      setShortenedLnik('')
    }
  }

  return (
    <div className='mb-18 relative -translate-y-16 z-10'>
      <form onSubmit={shortenIt} action="" className='form flex flex-col gap-3 rounded-md p-4'>
        <input 
          value={initialLink}
          onChange={(e) => setInititalLink(e.target.value)}
          type="text" 
          name='link' 
          placeholder='Shorten a link here' 
          className={`rounded-md py-2 px-3 bg-white w-full outline-none ${inputError ? 'border-2 border-red-600 placeholder:text-red-300' : ''}`}
        />
        {inputError && <span className='text-red-600 text-sm italic -mt-3'>Please add a link</span>}
        <button type='submit' className='rounded-md w-full'>Shorten it!</button>
      </form>
        {
          shortenedLink === '' ? null : 
          <div className='rounded-md overflow-hidden'>
            <p className='p-3 border-b-2 border-gray-300 bg-white mt-5 font-semibold text-gray-600'>{initialLink}</p>
            <div className='p-3 bg-white'>
              <p className='bg-white font-semibold text-cyan-400'>{shortenedLink}</p>
              <button className='rounded-md w-full mt-4'>Copy</button>
            </div>
          </div>
        }
    </div>
  )
}

export default Form
