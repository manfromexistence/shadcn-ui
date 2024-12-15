export type Template = {
  logo_url?: string;
  from_label: string;
  customer_label: string;
  invoice_no_label: string;
  issue_date_label: string;
  due_date_label: string;
  date_format: string;
  payment_label: string;
  note_label: string;
  description_label: string;
  quantity_label: string;
  price_label: string;
  total_label: string;
  total_summary_label: string;
  tax_label: string;
  vat_label: string;
  locale: string;
  timezone: string;
  include_decimals: boolean;
  include_units: boolean;
  include_qr: boolean;
  include_vat: boolean;
  title: string;
  subtotal_label: string;
  subtotal: number;
};

export type LineItem = {
  name: string;
  quantity: number;
  price: number;
  unit?: string;
  invoice_number?: string;
  issue_date?: string;
  due_date?: string;
};

export type TemplateProps = {
  title: string;
  invoice_number: string;
  discount?: number;
  issue_date: string;
  due_date: string;
  template: Template;
  line_items: LineItem[];
  customer_details?: JSON;
  payment_details?: JSON;
  from_details?: JSON;
  note_details?: JSON;
  currency: string;
  amount: number;
  customer_name?: string;
  vat?: number;
  tax?: number;
  width: number;
  height: number;
  token: string;
  size: "letter" | "a4";
  top_block?: JSON;
  bottom_block?: JSON;
  subtotal?: number;
};

export interface EditorDoc {
  type: "doc";
  content: EditorNode[];
}

export interface EditorNode {
  type: string;
  content?: InlineContent[];
}

interface InlineContent {
  type: string;
  text?: string;
  marks?: Mark[];
}

export interface Mark {
  type: string;
  attrs?: {
    href?: string;
  };
}

export interface TextStyle {
  fontSize: number;
  fontWeight?: number;
  fontStyle?: "normal" | "italic" | "oblique";
  color?: string;
  textDecoration?: string;
}
