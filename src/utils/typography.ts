import { type Language } from '../i18n/content'

const NBSP = '\u00A0'

export function applyTypographer(text: string, language: Language): string {
  if (!text) return text

  let result = text

  // Avoid dangling short words at line ends.
  if (language === 'ru') {
    result = result.replace(
      /\b(а|и|в|к|о|с|у|я|но|да|не|на|по|от|до|за|из|со|об|под|без|для|при|над)\s+/gimu,
      (_, word: string) => `${word}${NBSP}`,
    )
  } else {
    result = result.replace(/\b(a|an|the|to|of|in|on|at|by|for|and|or)\s+/gimu, (_, word: string) => `${word}${NBSP}`)
  }

  return result
}
