import { z } from "zod";

export const mailSchema = z.object({
	first_name: z.string().min(1, {
		error: "First name is required!",
	}),
	email: z.email({
		error: "Email is required!",
	}),
});
