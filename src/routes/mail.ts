import { Hono } from "hono";
import { sendMail } from "../lib/mails/send-mail";
import { mailSchema } from "../types/form";
import { zValidator } from "../utils/validator";

const mailRoute = new Hono();

mailRoute.post("/send", zValidator("json", mailSchema), async (c) => {
	try {
		const { email, first_name } = c.req.valid("json");

		await sendMail({
			email,
			subject: "Hello From Hono",
			first_name,
		});

		return c.json({
			message: "Hello mails",
		});
	} catch (error) {
		if (error instanceof Error) {
			return c.json({ error: error.message }, 500);
		}

		return c.json({ error: "An unknown error occurred" }, 500);
	}
});

export default mailRoute;
