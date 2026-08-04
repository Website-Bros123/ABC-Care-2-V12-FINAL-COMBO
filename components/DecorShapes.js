import {
  StarShapeIcon,
  SparkleIcon,
  DotClusterIcon,
  HeartCutoutIcon,
  BlobShapeIcon
} from "@/components/Icons";

const shapeMap = {
  star: StarShapeIcon,
  sparkle: SparkleIcon,
  dots: DotClusterIcon,
  heart: HeartCutoutIcon,
  blob: BlobShapeIcon
};

/**
 * A small cluster of decorative, non-interactive shapes scattered inside a
 * relatively-positioned parent. `items` is an array of
 * { type, top, left, right, bottom, size, color, delay, rotate }.
 */
export default function DecorShapes({ items }) {
  return (
    <div className="decor-layer" aria-hidden="true">
      {items.map((item, i) => {
        const Shape = shapeMap[item.type] || StarShapeIcon;
        return (
          <Shape
            key={i}
            className="decor-shape"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              width: item.size || 22,
              height: item.size || 22,
              color: item.color || "currentColor",
              animationDelay: item.delay || "0s",
              transform: `rotate(${item.rotate || 0}deg)`
            }}
          />
        );
      })}
    </div>
  );
}
