import {
	Body,
	Container,
	Font,
	Head,
	Hr,
	Html,
	Tailwind,
	Text,
} from "@react-email/components";
import type React from "react";

type EmailTemplateProps = {
	firstName: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstName,
}) => (
	<Html>
		<Head>
			<Font
				fallbackFontFamily="Verdana"
				fontFamily="Roboto"
				fontStyle="normal"
				fontWeight={400}
				webFont={{
					url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
					format: "woff2",
				}}
			/>
		</Head>
		<Tailwind>
			<Body className="bg-slate-50 font-sans">
				<Container className="mx-auto mb-16 max-w-[650px] rounded-lg border border-slate-200 bg-white py-5 pb-12">
					<Text className="mb-4 px-6 text-base text-slate-600 leading-relaxed">
						Hey {firstName}! 👋
					</Text>

					<Text className="mb-4 px-6 text-base text-slate-600 leading-relaxed">
						We just wanted to drop by your inbox like that one friend who shows
						up uninvited but always brings snacks. 🍪
						<br />
						Anyway, here’s a friendly hello from the codewithmontana hope your
						day’s treating you better than your Wi-Fi signal!
					</Text>

					<Text className="mb-4 px-6 text-base text-slate-600 leading-relaxed">
						If you didn’t ask for this email, no worries—just ignore it like
						that one message from your ex. 💌 But if you did, we’re glad to be
						in your inbox!
					</Text>

					<Hr className="mx-3 my-8 border-slate-200" />

					<Text className="mb-4 px-6 text-base text-slate-600 leading-relaxed">
						With coffee-fueled enthusiasm,
						<br />
						@codewithmontana ☕
					</Text>

					<Text className="m-0 text-pretty px-6 text-center text-slate-400 text-xs italic leading-relaxed">
						This is an automated message—no humans were harmed (or awake) during
						its creation. 🤖
					</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);
