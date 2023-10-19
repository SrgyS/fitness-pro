export function getProgressPercentage(
  currentRepetitions: number,
  requiredRepetitions: number,
) {
  if (requiredRepetitions <= 0 || currentRepetitions == null) {
    return 0
  }

  const progress = (currentRepetitions / requiredRepetitions) * 100

  return Math.min(100, Math.max(0, progress))
}
