import { SparklesPreview, SparklesPreviewColorful, SparklesPreviewDark } from "@/components/ui/sparkles-demo";

export default function SparklesPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <SparklesPreview />
      <SparklesPreviewDark />
      <SparklesPreviewColorful />
    </div>
  );
}
