import { ScrollArea } from "@midday/ui/scroll-area";
import type { TemplateProps } from "../types";
import { EditorContent } from "./components/editor-content";
import { LineItems } from "./components/line-items";
import { Logo } from "./components/logo";
import { Meta } from "./components/meta";
import { Summary } from "./components/summary";

export function HtmlTemplate({
  invoice_number,
  issue_date,
  due_date,
  template,
  line_items,
  customer_details,
  from_details,
  payment_details,
  note_details,
  currency,
  discount,
  customer_name,
  width,
  height,
  top_block,
  bottom_block,
}: TemplateProps) {
  return (
    <ScrollArea
      className="bg-background border border-border w-full md:w-auto h-full [&>div]:h-full"
      style={{
        width: "100%",
        maxWidth: width,
        height,
      }}
      hideScrollbar
    >
      <div
        className="p-4 sm:p-6 md:p-8 h-full flex flex-col"
        style={{ minHeight: height - 5 }}
      >
        <div className="flex justify-between">
          <Meta
            template={template}
            invoiceNumber={invoice_number}
            issueDate={issue_date}
            dueDate={due_date}
            timezone={template.timezone}
          />

          {template.logo_url && (
            <Logo logo={template.logo_url} customerName={customer_name || ""} />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 mb-4">
          <div>
            <p className="text-[11px] text-[#878787] font-mono mb-2 block">
              {template.from_label}
            </p>
            <EditorContent content={from_details} />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-[11px] text-[#878787] font-mono mb-2 block">
              {template.customer_label}
            </p>
            <EditorContent content={customer_details} />
          </div>
        </div>

        <EditorContent content={top_block} />

        <LineItems
          lineItems={line_items}
          currency={currency}
          descriptionLabel={template.description_label}
          quantityLabel={template.quantity_label}
          priceLabel={template.price_label}
          totalLabel={template.total_label}
          includeDecimals={template.include_decimals}
          locale={template.locale}
          includeUnits={template.include_units}
        />

        <div className="mt-10 md:mt-12 flex justify-end mb-6 md:mb-8">
          <Summary
            includeVAT={template.include_vat}
            includeTax={template.include_tax}
            taxRate={template.tax_rate}
            vatRate={template.vat_rate}
            currency={currency}
            vatLabel={template.vat_label}
            taxLabel={template.tax_label}
            totalLabel={template.total_summary_label}
            lineItems={line_items}
            includeDiscount={template.include_discount}
            discountLabel={template.discount_label}
            discount={discount}
            locale={template.locale}
            includeDecimals={template.include_decimals}
            subtotalLabel={template.subtotal_label}
          />
        </div>

        <div className="flex flex-col space-y-6 md:space-y-8 mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <p className="text-[11px] text-[#878787] font-mono mb-2 block">
                {template.payment_label}
              </p>
              <EditorContent content={payment_details} />
            </div>
            {note_details && (
              <div className="mt-4 md:mt-0">
                <p className="text-[11px] text-[#878787] font-mono mb-2 block">
                  {template.note_label}
                </p>
                <EditorContent content={note_details} />
              </div>
            )}
          </div>

          <EditorContent content={bottom_block} />
        </div>
      </div>
    </ScrollArea>
  );
}
