import Image from 'next/image'

export default function Home() {
  return (
    <div className=" flex flex-col gap-20">
      <section className="w-full bg-blue-300 h-[600px]">banner</section>
      <section className="w-full bg-gray-100 h-[200px]">partners</section>
      <main className="px-4">
        <header className="flex flex-col items-center">
          <span className="text-orange-500">Our Highlights</span>
          <h2 className="text-5xl font-bold">Products</h2>
        </header>
        <ul className="grid grid-cols-1 gap-6 mt-10">
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
      <section className="w-full bg-blue-300 h-[400px]">reviews</section>
      <section className="w-full bg-blue-300 h-[400px]">newsletter</section>
    </div>
  )
}
