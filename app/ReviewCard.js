import React from 'react'

const ReviewCard = () => {
  return (
    <div className='md:flex justify-center gap-20 pt-14'>
        <div className='bg-white py-8 px-6 md:h-[14vw] md:m-0 m-auto md:w-[23vw] w-[180vw] rounded-xl border-[red] border-[2px]'>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <img className='size-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/7b52/c50d/64efec4c75c3e34f6408021730b20d9a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D64pzpUwcfkLZtfkC00TyzTWIejj3CcskWOoX9ajtnCeMwsrJHYUcluw-6oUNw6mYJgoTJNePOJ96BQ8ubCjuEWLlAxeECDXsnbYLoQiGYDV0iOWT2XbYjhaDY7AyTaOrJMIntZCZmnVk91trfRnVXSm5AqyqzRH1BMrsp5fn2DFjDj4Bp9jxBvhZ9EXAHPMH2C0a1gUk~OTujj43of3BntIXLad8r8jl~c~GLXORpBJIrE5wR3v8VEOH81TP8l5MHAn-w5snkOEMf-owQVViC-w4UUzNpC73h8NuQCs~52TcAxP1yjfKUC6TGI1eAXUAbWmI60opthhDPyU8cx3QQ__" />
              <div>
                  <h3 className='font-semibold'>Viezh Robert</h3>
                  <p className='text-sm font-light'>Warsaw, Poland</p>
              </div>
            </div>
            <h3 className='font-bold'>4.5 ⭐</h3>
          </div>
          <p className='md:text-sm text-base mt-2 leading-relaxed'>
            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.”
          </p>
        </div>

        <div className='bg-white my-5 py-8 px-6 md:h-[14vw] md:m-0 m-auto md:w-[23vw] w-[180vw] rounded-xl border-[#DDDDDD] border-[2px]'>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <img className='size-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3SXMI94zFlG5j1j9sfuMjzOzaHBwxqnb1AVRUq25v0-Vl7OVm0z7onIqpUBd8KmN0qmYHnHCs4mIgFMfVw6Z8amNWJHkvBbPKMWKAdQqGTngYpz8~WjYZL4DK1WDb6U6vcP1cNgFcZc-tcOzBokyD7ZnYheWEExKkmGU7CUlC3lAwSp7fDXTzZuHxgAmJeAyGSfJ~3KXC-M~xWIFItxT6I~d2yqm1kHP20QaPnP3Ap3AmpbIbTbf5RcZ9FmklAr9UIeWIVRF9SCByRXw--T4dk9Yppv~KhAmiGfdpA2h4VWFhDOBDnhHtkGOj8CH21fgp1XrzSFHeWTltWm9Lpvng__" />
              <div>
                  <h3 className='font-semibold'>Yessica Christy</h3>
                  <p className='text-sm font-light'>Shanxi, China</p>
              </div>
            </div>
            <h3 className='font-bold'>4.5 ⭐</h3>
          </div>
          <p className='md:text-sm text-base mt-2 leading-relaxed'>
          “I like it because I like to travel far and still can connect with high speed.”
          </p>
        </div>

        <div className='bg-white py-8 px-6 md:h-[14vw] md:m-0 m-auto md:w-[23vw] w-[180vw] rounded-xl border-[#DDDDDD] border-[2px]'>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <img className='size-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/b0e0/b9a7/2a3108aed3c607327c6c1eb79c47366c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXkm85VtehXTR5UwR37DyvmOUdawMClutJyR3HUc7wdGFd7MTYChgEmtD0fFfy5oESChc1OgKYlyC61dXzDhQ0XPaHmO-Jidk-JhMvMPDnWuWfSK0zfx4CBGHaubf0NGtFJe0dig7QbxsUboS2HSQkLWqy750KG2XneBUBSmRkWiCuU-jMNPZM-qgtWnjlfeMAuFs027JWrSa9yani5rKXett8YTjIpQTVqKdgOKNyEGksY~ce9aTwIHfZq3HhOVIaoUnbtElODWZITDWiN6jbl77xfopmS7aYxYPN2M6qLKS9Nknkogh3Ylt4-MOCtJjtn6D-rqtEGo78m~9rMqTA__" />
              <div>
                  <h3 className='font-semibold'>Kim Young Jou</h3>
                  <p className='text-sm font-light'>Seoul, South Korea</p>
              </div>
            </div>
            <h3 className='font-bold'>4.5 ⭐</h3>
          </div>
          <p className='md:text-sm text-base mt-2 leading-relaxed'>
          “This is very unusual for my business that currently requires a virtual private network that has high security.”
          </p>
        </div>
    </div>
  )
}

export default ReviewCard
