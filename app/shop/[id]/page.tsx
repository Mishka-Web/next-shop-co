export async function generateStaticParams() {
	const posts = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

	return posts.map((post: { id: string }) => (
		{
			slug: post.id,
		}
	))
}