"use server";

import { client } from "@midday/engine/client";

type GetAccountParams = {
  id?: string;
  accessToken?: string;
  institutionId?: string; // Plaid
  provider: "gocardless" | "teller" | "plaid";
};

export async function getAccounts({
  id,
  provider,
  accessToken,
  institutionId,
}: GetAccountParams) {
  const accountsResponse = await client.accounts.$get({
    query: {
      id,
      provider,
      accessToken,
      institutionId,
    },
  });

  if (!accountsResponse.ok) {
    throw new Error("Failed to get accounts");
  }

  const { data } = await accountsResponse.json();

  return {
    data: data.sort((a, b) => b.balance.amount - a.balance.amount),
  };
}
