export interface IReadingOption {
  option: {
    id: string;
    name: string;
    description: string;
    background: string;
    accent: string;
    foreground: string;
    sample: string;
  };
  selected: boolean;
  onSelect: () => void;
}
