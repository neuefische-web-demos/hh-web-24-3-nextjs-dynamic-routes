import Link from 'next/link';
import { movies } from '@/lib/data';
import { useRouter } from 'next/router';

// imperatives Routing
export default function Movies() {
  // push()
  const router = useRouter();

  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          if (confirm('Are you Aquaman Fan')) {
            router.push('/movies/aquaman');
          }
        }}>
        Are your Aquaman Fan?
      </button>
    </>
  );
}

//
