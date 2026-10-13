export function getContinueLabel(
  label: string,
  isBusy: boolean,
  busyLabel: string,
) {
  return isBusy ? busyLabel : label;
}
