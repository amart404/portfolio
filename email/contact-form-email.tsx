import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { getCurrentDate } from "@/lib/utils";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New email from Portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New message from: {senderEmail}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Message received on: {getCurrentDate()}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
