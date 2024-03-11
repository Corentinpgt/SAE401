import Tag from "../Tag"

export default function SmallCard() {
  return (
    <div className="relative w-96 h-96 bg-cyan-600 text-white">
      <Tag intent="rent" text="Rent for $4.50"/>
      <figure className="relative h-full">
        <img src="" alt="visuel du film" />
        <figcaption className="absolute bottom-0 p-4">
          <h2 className="text-3xl ">Title</h2>
          <section>
            <p className="">Crime / 2023</p>

            <p className="">Director : Me Mohi</p>
          </section>
        </figcaption>
      </figure>

    </div>
  )
}