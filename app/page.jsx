import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia autem hic tenetur voluptatem eaque sunt quis facere, dolore, iusto eveniet qui, nihil ea repudiandae vel at iste ducimus consequuntur molestiae adipisci cumque laborum placeat quam?</p>
      <div className="flex justify-center my-8">
        <Link href={"/tickets"}>
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>
      <div className="card">
        <h3>new member of web dev team</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste rerum fuga. Laboriosam, suscipit animi eveniet dolorem est sit hic error labore blanditiis cupiditate fuga unde accusantium neque culpa, ducimus, a nihil maiores repellat.</p>
      </div>
    </main>
  )
}
