export type BookRecord = {
  title: string;
  author: string;
  progress: `${number}%`;
  tone: "violet" | "rust";
  glyph: string;
};

export type RecentSignalsProps = {
  selectedBook: string | null;
  onSelectBook: (title: string) => void;
};
