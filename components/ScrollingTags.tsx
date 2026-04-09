import { finalTags } from "@/lib/data";

const loopedTags = [...finalTags, ...finalTags];

export function ScrollingTags() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {loopedTags.map((tag, index) => (
          <span key={`${tag}-${index}`} className="marquee__item">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
