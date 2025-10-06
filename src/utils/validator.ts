import type { ZodType } from "zod"
import type { ValidationTargets } from "hono"
import { zValidator as zv } from "@hono/zod-validator"

export const zValidator = <T extends ZodType, Target extends keyof ValidationTargets>(
    target: Target,
    schema: T
) =>
    zv(target, schema, (result, c) => {
        if (!result.success) {
            const firstError = result.error.issues[0];
            console.log(firstError)
            return c.json(
                {
                    error: `Validation failed: ${firstError.message}`,
                },
                400
            )
        }
    })