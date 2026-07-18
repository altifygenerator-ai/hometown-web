import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FreePreviewPayload = {
  name?: string;
  businessName?: string;
  phoneOrEmail?: string;
  currentLink?: string;
  businessType?: string;
  serviceArea?: string;
  mainGoal?: string;
  services?: string;
  notes?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FreePreviewPayload;

    const message = `
Free website preview request

Name:
${body.name || "Not provided"}

Business name:
${body.businessName || "Not provided"}

Best contact:
${body.phoneOrEmail || "Not provided"}

Current website / Facebook / Google link:
${body.currentLink || "Not provided"}

Business type:
${body.businessType || "Not provided"}

Service area:
${body.serviceArea || "Not provided"}

Main goal:
${body.mainGoal || "Not provided"}

Main services / offers:
${body.services || "Not provided"}

Extra notes:
${body.notes || "Not provided"}
`;

    const { error } = await resend.emails.send({
      from: "Hometown Web Services <hello@hometownwebservicesar.com>",
      to: ["altifygenerator@gmail.com"],
      replyTo: body.phoneOrEmail?.includes("@")
        ? body.phoneOrEmail
        : "altifygenerator@gmail.com",
      subject: `Free Website Preview Request${
        body.businessName ? ` - ${body.businessName}` : ""
      }`,
      text: message,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}