import { z } from 'zod'

/** Any string, no format/length check. Use when refinement validates (e.g. confirmPassword). */
export const string = () => z.string()

/** Optional string */
export const optionalString = () => z.string().optional()

/** Optional boolean (e.g. "Remember me") */
export const optionalBoolean = () => z.boolean().optional()

/** Boolean with no validation (e.g. toggle) */
export const boolean = () => z.boolean()
