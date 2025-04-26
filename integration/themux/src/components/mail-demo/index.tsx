import { Mail } from "@/components/mail-demo/components/mail";
import { accounts, mails } from "@/components/mail-demo/data";
import { BlockViewer } from "../block-viewer";

export function MailPage() {
  return <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />;
}

export function MailDemo() {
  return (
    <BlockViewer name="mail" internalUrl={`/mail`}>
      <MailPage />
    </BlockViewer>
  );
}
