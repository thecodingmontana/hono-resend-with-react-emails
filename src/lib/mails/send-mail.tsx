import { EmailTemplate } from "../../emails/email-template";
import { resend } from "../resend";

interface Props {
    email: string
    subject: string
    first_name: string
}

export const sendMail = async ({ email, subject, first_name }: Props) => {
  try {
    const result = await resend.emails.send({
      from: "Team Hono <noreply@thecodingmontana.com>",
      to: [email],
      subject,
      react: (
        <EmailTemplate firstName={first_name} />
      ),
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to send email:", error.message);
    }
    throw new Error(`Failed to send email`)
  }
};
