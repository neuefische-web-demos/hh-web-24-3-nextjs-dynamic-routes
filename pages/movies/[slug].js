import Link from 'next/link';
import { movies } from '../../lib/data';
import { useRouter } from 'next/router';

export default function MovieDetails() {
  const router = useRouter();
  //    ⤵️ liegt der detailseite als string "the-avengers"
  const querySlug = router.query.slug; //

  // const { slug } = router.query;

  console.log('router', router);
  console.log('querySlug', querySlug);

  const currentMovie = movies.find((movie) => movie.slug === querySlug);

  if (!currentMovie) {
    return null;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
