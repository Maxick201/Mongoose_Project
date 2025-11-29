import { useState } from "react";
import type { PostType } from "../Post/Post";
import Post from "../Post/Post";

export type SliderProps = {
  posts: PostType[];
  loop?: boolean; 
};

function Slider({ posts, loop = false }: SliderProps) {
  const [index, setIndex] = useState(0);
  const count = posts.length;

  if (count === 0) return null;

  const prev = () =>
    setIndex((i) => (loop ? (i - 1 + count) % count : Math.max(0, i - 1)));

  const next = () =>
    setIndex((i) => (loop ? (i + 1) % count : Math.min(count - 1, i + 1)));

  return (
    <div className="slider">
      <button onClick={prev} disabled={!loop && index === 0}>
        &lt;
      </button>

      <Post {...posts[index]} />

      <button onClick={next} disabled={!loop && index === count - 1}>
        &gt;
      </button>

      <div className="dots">
        {posts.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            {i + 1}
            </button>
        ))}
      </div>
      <div className="counter">
        {index + 1} / {count}
      </div>
    </div>
  );
}

export default Slider;
