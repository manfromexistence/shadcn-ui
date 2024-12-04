import { capitalCase } from "change-case";
import { v4 as uuidv4 } from "uuid";
import type { Transaction } from "./types";
import { formatAmountValue, formatDate } from "./utils";

export function transform({
  transaction,
  inverted,
  timezone,
  dateAdjustment,
}: {
  transaction: Transaction;
  inverted: boolean;
  timezone: string;
  dateAdjustment?: number;
}) {
  return {
    internal_id: `${transaction.teamId}_${uuidv4()}`,
    team_id: transaction.teamId,
    status: "posted",
    method: "other",
    date: formatDate(transaction.date, timezone, dateAdjustment),
    amount: formatAmountValue({ amount: transaction.amount, inverted }),
    name: transaction?.description && capitalCase(transaction.description),
    manual: true,
    category_slug:
      formatAmountValue({ amount: transaction.amount, inverted }) > 0
        ? "income"
        : null,
    bank_account_id: transaction.bankAccountId,
    currency: transaction.currency.toUpperCase(),
    notified: true,
  };
}
