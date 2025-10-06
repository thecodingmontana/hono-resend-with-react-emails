import { Hono } from "hono";
import { zValidator } from "../utils/validator";
import { mailSchema } from "../types/form";
import { sendMail } from "../lib/mails/send-mail";

const mailRoute = new Hono()

mailRoute.post('/send', zValidator('json', mailSchema), async (c) => {
  try {
    const { email, first_name } = c.req.valid('json')

    await sendMail({
      email,
      subject: 'Hello From Hono',
      first_name
    })

    return c.json({
      message: "Hello mails"
    })
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message }, 500)
    }

    return c.json({ error: "An unknown error occurred" }, 500)
  }
})


export default mailRoute