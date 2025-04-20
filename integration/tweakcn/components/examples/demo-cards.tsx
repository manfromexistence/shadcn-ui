import { cn } from "@/lib/utils";
import { DemoCookieSettings } from "./cards/cookie-settings";
import { DemoCreateAccount } from "./cards/create-account";
import { DemoDatePicker } from "./cards/date-picker";
import { DemoGithub } from "./cards/github-card";
import { DemoNotifications } from "./cards/notifications";
import { DemoPaymentMethod } from "./cards/payment-method";
import { DemoReportAnIssue } from "./cards/report-an-issue";
import { DemoShareDocument } from "./cards/share-document";
import { DemoTeamMembers } from "./cards/team-members";
import { DemoStats } from "./cards/stats";
import { DemoChat } from "./cards/chat";
import { DemoFontShowcase } from "./cards/font-showcase";

export function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-center [&>div]:w-full", className)}
      {...props}
    />
  );
}

function DemoCards() {
  return (
    <div className="@container">
      <div className="flex flex-col @4xl:flex-row items-center @4xl:items-start justify-center gap-4">
        {/* First column */}
        <div className="flex flex-col gap-4 max-w-lg">
          <DemoContainer>
            <DemoStats />
          </DemoContainer>
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoFontShowcase />
          </DemoContainer>
        </div>

        {/* Third column */}
        <div className="flex flex-col gap-4 max-w-lg">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
          <DemoContainer>
            <DemoChat />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
        </div>
      </div>
    </div>
  );
}

export default DemoCards;
