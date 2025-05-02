export function TextHeader({
  text,
  center,
}: {
  text: string;
  center?: boolean;
}) {
  return (
    <span className={`text-3xl font-semibold ${center && "text-center"}`}>
      {text}
    </span>
  );
}
