import Image from 'next/image'
import {
  Award,
  Medal,
  Trophy,
  Gauge,
  Box,
  CircleUser,
  CircleArrowRight,
} from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="w-full bg-blue-300 h-[600px] bg-[url('/banner.jpg')] bg-cover bg-no-repeat bg-center">
        <header className="h-full flex flex-col justify-center items-center gap-8 px-8">
          <h1 className="text-7xl font-bold text-gray-800">
            Top <span className="text-orange-500">Products</span> Arround the
            world
          </h1>
          <p className="text-xl  text-gray-600">
            Elevate your culinary journey with our thoughtfully curated menu,
            designed to cater to diverse tastes.
          </p>
        </header>
      </section>
      <section className="w-full bg-gray-100 p-4 mt-20">
        <header className="flex flex-col items-center">
          <span className="text-gray-400 font-bold">Our Highlights</span>
        </header>
        <ul className="w-full flex justify-around gap-10 overflow-hidden  py-10">
          <li className="max-w-15">
            <Award size="auto" className="text-gray-400" fill="#f3f3f3" />
          </li>
          <li className="max-w-15">
            <Medal size="auto" className="text-gray-400" fill="#f3f3f3" />
          </li>
          <li className="max-w-15">
            <Trophy size="auto" className="text-gray-400" fill="#f3f3f3" />
          </li>
          <li className="max-w-15">
            <Gauge size="auto" className="text-gray-400" fill="#f3f3f3" />
          </li>
        </ul>
      </section>
      <main className="px-4 max-w-[1440px] mt-40 m-auto">
        <header className="flex flex-col items-center">
          <span className="text-orange-500">Our Highlights</span>
          <h2 className="text-5xl font-bold text-gray-800">Products</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350,1fr))] gap-6 mt-10">
          <li className="bg-white rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-blue-200 overflow-hidden">
              <Image src="" alt="" />
            </div>
            <div className="p-12">
              <header className="flex justify-between">
                <h3 className="font-bold text-xl">Sushi</h3>
                <span className="font-bold text-2xl text-orange-500">$29</span>
              </header>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates possimus eveniet natus cumque odio accusamus
                voluptatum?
              </p>
            </div>
          </li>
          <li className="bg-white rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-blue-200 overflow-hidden">
              <Image src="" alt="" />
            </div>
            <div className="p-12">
              <header className="flex justify-between">
                <h3 className="font-bold text-xl">Sushi</h3>
                <span className="font-bold text-2xl text-orange-500">$29</span>
              </header>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates possimus eveniet natus cumque odio accusamus
                voluptatum?
              </p>
            </div>
          </li>
          <li className="bg-white rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-blue-200 overflow-hidden">
              <Image src="" alt="" />
            </div>
            <div className="p-12">
              <header className="flex justify-between">
                <h3 className="font-bold text-xl">Sushi</h3>
                <span className="font-bold text-2xl text-orange-500">$29</span>
              </header>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates possimus eveniet natus cumque odio accusamus
                voluptatum?
              </p>
            </div>
          </li>

          <li className="bg-white rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-blue-200 overflow-hidden">
              <Image src="" alt="" />
            </div>
            <div className="p-12">
              <header className="flex justify-between">
                <h3 className="font-bold text-xl">Sushi</h3>
                <span className="font-bold text-2xl text-orange-500">$29</span>
              </header>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates possimus eveniet natus cumque odio accusamus
                voluptatum?
              </p>
            </div>
          </li>
          <li className="bg-white rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-blue-200 overflow-hidden">
              <Image src="" alt="" />
            </div>
            <div className="p-12">
              <header className="flex justify-between">
                <h3 className="font-bold text-xl">Sushi</h3>
                <span className="font-bold text-2xl text-orange-500">$29</span>
              </header>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates possimus eveniet natus cumque odio accusamus
                voluptatum?
              </p>
            </div>
          </li>
          <li className="bg-white rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-blue-200 overflow-hidden">
              <Image src="" alt="" />
            </div>
            <div className="p-12">
              <header className="flex justify-between">
                <h3 className="font-bold text-xl">Sushi</h3>
                <span className="font-bold text-2xl text-orange-500">$29</span>
              </header>
              <p className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates possimus eveniet natus cumque odio accusamus
                voluptatum?
              </p>
            </div>
          </li>
        </ul>
      </main>
      <section className="max-w-[1440px] gap-8 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300,1fr))] place-self-center items-center px-8 py-40 mt-20">
        <div className="flex justify-center">
          <Box size={300} fill="#e6e6e6" />
        </div>
        <div className="flex flex-col xl:flex-row gap-4 xl:items-center">
          <div>
            <header className="flex flex-col items-center">
              <span className="text-orange-500">Customers Reviews</span>
              <h2 className="text-5xl font-bold text-gray-800">
                What they say about us
              </h2>
            </header>
            <div className="flex items-center gap-8 mt-8">
              <div className="rounded-full w-15 h-15 flex items-center justify-center overflow-hidden">
                <CircleUser
                  size="auto"
                  fill="#e6e6e6"
                  className="text-gray-500"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800">Raymond Lucifer</p>
                <p className="font-bold text-xs text-gray-500">Bike Rider</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur voluptatibus minus nihil placeat itaque
              blanditiis...&quot;
            </p>
          </div>
          <button className="text-orange-300 hover:text-orange-500 transition duration-200 cursor-pointer">
            <CircleArrowRight size={60} fill="#ffffff" />
          </button>
        </div>
      </section>
      <section className="bg-orange-500 px-8 py-40">
        <div className="max-w-[1440px] gap-8 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300,1fr))] place-self-center items-center">
          <div className="flex justify-center">
            <Box size={300} fill="#e6e6e6" />
          </div>
          <div>
            <header className="flex flex-col justify-center col-span-2">
              <h2 className="text-5xl font-bold text-gray-50">
                Get more discont if order from us
              </h2>
              <span className="text-gray-100 mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quos non sunt quas, itaque aperiam voluptas omnis explicabo
                commodi corporis ipsa harum voluptates nam rem doloribus quo
                libero repudiandae labore?
              </span>
            </header>
            <form
              action="subscribe"
              className="flex flex-col xl:flex-row gap-4 mt-8"
            >
              <input
                type="text"
                placeholder="Your Email Address"
                className="border border-gray-600 rounded w-full p-4  bg-gray-50"
              />
              <button
                type="submit"
                className="border border-gray-600 rounded w-full xl:w-30 p-4 bg-gray-800 text-gray-50 font-bold hover:bg-orange-400 hover:text-gray-800"
              >
                Get
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
