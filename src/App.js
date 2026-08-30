import './App.css';
import ImageCard from './components/ImageCard';

const images = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    title: 'Sunset Over the Bay',
    description:
      'Warm evening colors reflect across the water as the sky turns pink and gold.',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    title: 'Forest Trail',
    description:
      'A quiet wooded path surrounded by tall trees and soft forest light.',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
    title: 'City Lights',
    description:
      'Neon reflections and glowing windows bring energy to the city skyline at night.',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    title: 'Sports Action',
    description:
      'A powerful moment of movement, focus, and energy on the field.',
  },
  {
    id: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
    title: 'Music Night',
    description:
      'Lights, sound, and emotion come together in a memorable live performance.',
  },
  {
    id: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80',
    title: 'Wild Animals',
    description:
      'A close look at nature and the beauty of wildlife in motion.',
  },
  {
    id: 7,
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    title: 'Mountain Escape',
    description:
      'A scenic climb through crisp air and unforgettable natural beauty.',
  },
  {
    id: 8,
    imageUrl:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    title: 'Beach Day',
    description:
      'Sunshine, waves, and a relaxed coastal mood for an easy getaway.',
  },
  {
    id: 9,
    imageUrl:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    title: 'Happy Dog',
    description:
      'A joyful companion basking in sunlight and pure affection.',
  },
  {
    id: 10,
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    title: 'City Street',
    description:
      'Urban life and everyday energy captured in a single moment.',
  },
  {
    id: 11,
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    title: 'Concert Crowd',
    description:
      'A vibrant audience celebrating the rhythm and excitement of live music.',
  },
  {
    id: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    title: 'Snow Adventure',
    description:
      'A winter landscape full of frost, motion, and fresh mountain air.',
  },
];

function App() {
  return (
    <>
      <header className="gallery-header">
        <h1>Image Gallery</h1>
      </header>

      <main className="gallery-grid">
        {images.map((image) => (
          <ImageCard key={image.id} {...image} />
        ))}
      </main>
    </>
  );
}

export default App;
